const vscode = require('vscode');
const chokidar = require("chokidar");
const utilityProperties = require("./dynamicCss/utilityProperties");
const staticUtilities = require("./dynamicCss/staticUtilities");
const staticValues = require("./dynamicCss/staticValues");
let config = require("./mojo.config");
const { toHsl, toHex } = require("./utils/colorConverter");
const mergeConfig = require("./utils/mergeConfig");
const pseudos = require("./utils/pseudos");
const fs = require('fs');
const path = require('path');
const glob = require('glob');
const markdownit = require('markdown-it');

const colorNames = {};

for (const i in utilityProperties["_"]) {
  utilityProperties[utilityProperties["_"][i]] = utilityProperties["_"][i];
}
const utilityPropertiesSorted = Object.keys(utilityProperties).sort();
const workspaceFolders = vscode.workspace.workspaceFolders;


function activate(context) {
  loadConfig();

  for (let i in workspaceFolders) {
    const configFile = workspaceFolders[i].uri.fsPath + "/mojo.config.js";
    const watcher = chokidar.watch(configFile);

    watcher.on("change", () => {
      const status = loadConfig();
      if (status)
        vscode.window.showInformationMessage('Mojo CSS Intellisense has been reconfigured.');
      else
        vscode.window.showErrorMessage("Failed to read the 'mojo.config.js' file.");
    });
  }

  context.subscriptions.push(
    vscode.languages.registerCompletionItemProvider(
      { scheme: 'file', language: '*' },
      new CompletionProvider(),
      ...getAlphabetCharacters()
    )
  );

  const nestedFiles = getNestedFiles(__dirname, 'docs/**/*.md');

  const data = nestedFiles.docs;
  const docsDataProvider = new DocsDataProvider(data);
  vscode.window.registerTreeDataProvider('mojocss-docs-files', docsDataProvider);
  vscode.commands.registerCommand('mojocss-docs.refresh', () => docsDataProvider.refresh());

  const viewerProvider = new MarkdownViewerProvider();
  context.subscriptions.push(vscode.workspace.registerTextDocumentContentProvider('markdown-viewer', viewerProvider));

  let openedTabs = {};
  vscode.commands.registerCommand('mojocss-docs.openFile', async (filePath, title) => {
    if (openedTabs[title]) {
      openedTabs[title].reveal();
      return;
    }

    const panel = vscode.window.createWebviewPanel(
      'markdownViewer',
      title,
      vscode.ViewColumn.Active,
      {
        enableScripts: true
      }
    );
    openedTabs[title] = panel;
    panel.webview.html = await viewerProvider.provideTextDocumentContent(filePath, title);

    panel.onDidDispose(() => {
      delete openedTabs[title];
    });
  });
}

function getAlphabetCharacters() {
  const alphabetCharacters = [];
  for (let charCode = 'a'.charCodeAt(0); charCode <= 'z'.charCodeAt(0); charCode++) {
    alphabetCharacters.push(String.fromCharCode(charCode));
  }
  return alphabetCharacters;
}

function loadConfig() {
  let status = true;

  if (workspaceFolders) {
    for (let i in workspaceFolders) {
      const projectPath = workspaceFolders[i].uri.fsPath;
      const configFilePath = path.join(projectPath, "mojo.config.js");

      if (fs.existsSync(configFilePath)) {
        try {
          let configContent = fs.readFileSync(configFilePath, 'utf-8');
          configContent = configContent.replace(/\/\*[\s\S]*?\*\/|([^:]|^)\/\/.*$/gm, '$1');
          while (configContent.includes("  ")) {
            configContent = configContent.replace(/\n|\s{2,}|\t/g, ' ');
          }
          configContent = configContent.replace(/^import\s+([^;]+)\s+from\s+['"]([^'"]+)['"]/g, 'const $1 = \'$2\';');
          configContent = configContent.replace(/const\s+([\w\d_]+)\s*=\s*require\s*\(\s*['"]([^'"]+)['"]\s*\)/g, 'const $1 = \'$2\';');

          configContent = configContent.replace(/export\s+(?:default|)/g, 'module.exports =');

          const userConfig = eval(configContent);

          let defaultConfig = require("./mojo.config");
          let newConfig = new mergeConfig(defaultConfig, userConfig);
          config = newConfig;
          break;
        } catch (e) {
          console.log(e)
          console.log("mojo.config.js was not found or invalid");
          status = false;
        }
      } else {
        console.log("mojo.config.js was not found:", configFilePath);
      }
    }
  }

  for (let i in config["base"]["themes"]) {
    for (let j in config["base"]["themes"][i]) {
      if (i === "default" || (i !== "default" && !colorNames[j]))
        colorNames[j] = config["base"]["themes"][i][j];
    }
  }

  staticValues["text-w"] = { ...staticValues["text-w"], ...config.base.definedValues.fontWeight }
  staticValues["text-ls"] = { ...staticValues["text-ls"], ...config.base.definedValues.letterSpacing }
  staticValues["text-lh"] = { ...staticValues["text-lh"], ...config.base.definedValues.lineHeight }
  staticValues["_i_rounded"] = { ...staticValues["_i_rounded"], ...config.base.definedValues.borderRadius }
  staticValues["text"] = { ...config.base.textDesign }

  return status;
}

class CompletionProvider {
  constructor() {
    this.timeout = null;
    this.completionItemsName = [];
  }

  provideCompletionItems(document, position) {
    return new Promise(resolve => {
      if (this.timeout) {
        clearTimeout(this.timeout);
      }

      this.timeout = setTimeout(() => {
        let textBeforeCursor = this.getTextBeforeCursor(document, position).trim();

        if (this.isOutOfTag(document, position) || textBeforeCursor.length == 0) {
          resolve([]);
          return;
        }

        const variant = this.getVariantAtPosition(document, position);

        if (textBeforeCursor.startsWith("-")) {
          textBeforeCursor = textBeforeCursor.substring(1)
        }

        let completionItems = [];
        this.completionItemsName = [];

        if (variant || (this.isJS(document) && this.isInJSString(document, position))) {

          let keys = [textBeforeCursor];

          if (textBeforeCursor.length > 0) {
            for (let i in staticValues) {
              for (let j in staticValues[i]) {
                if (j.includes(textBeforeCursor)) {
                  keys.push(i)
                }
              }
            }
            keys = [...new Set(keys)];
          }

          let onlyValues = false;
          for (let key of keys) {
            for (const i in staticUtilities) {
              if (i.includes(key))
                completionItems = [...completionItems, ...this.createSuggestion(i, true, onlyValues)];
            }

            let textBeforeValue = key;
            let textArr = textBeforeValue.split("-");
            if (textArr.length > 1) {
              textArr.pop();
            }
            textBeforeValue = textArr.join("-");

            for (const i in utilityPropertiesSorted) {
              if (utilityPropertiesSorted[i] !== "_" &&
                ((textBeforeValue.length > 1 && utilityPropertiesSorted[i].includes(textBeforeValue)) ||
                  (textBeforeValue.length == 1 && utilityPropertiesSorted[i].startsWith(textBeforeValue)))
              ) {
                completionItems = [
                  ...completionItems,
                  ...this.createSuggestion(utilityPropertiesSorted[i], false, onlyValues),
                ];
              }
            }

            if (!onlyValues)
              onlyValues = key;
          }
        }

        if (!variant || this.isJS(document)) {
          const variants = [];

          for (let i in pseudos) {
            if (i.includes(textBeforeCursor)) {
              variants.push(i)
            }
          }

          for (let i in config.base.themes) {
            if (i === "default") continue;

            variants.push(i)

            for (let j in pseudos) {
              if (j === "class" || j === "className") continue;

              variants.push(i + ":" + j)
            }

            for (let j in config.base.breakpoints) {
              if (j === "default") continue;

              variants.push(i + ":" + j)
              variants.push(i + ":" + "i-" + j)

              for (let k in pseudos) {
                if (k === "class" || k === "className") continue;

                variants.push(i + ":" + j + ":" + k)
                variants.push(i + ":" + "i-" + j + ":" + k)
              }
            }
          }

          for (let i in config.base.breakpoints) {
            if (i === "default") continue;

            variants.push(i)
            variants.push("i-" + i)

            for (let j in pseudos) {
              if (j === "class" || j === "className") continue;

              variants.push(i + ":" + j)
              variants.push("i-" + i + ":" + j)

            }
          }

          for (let i of variants) {
            if (i.includes(textBeforeCursor)) {
              const item = this.createAttrSuggestionItem(i, this.isJS(document));
              completionItems.push(item);
            }
          }

        }


        resolve(completionItems);
      }, 100);
    });
  }

  getTextBeforeCursor(doc, pos) {
    let range = doc.getWordRangeAtPosition(pos);
    if (!range) {
      range = new vscode.Range(pos, pos.translate(0, -1));
    }
    return doc.getText(range);
  }

  getVariantAtPosition(document, position) {
    const line = document.lineAt(position);
    const lineText = line.text;
    const textBeforeCursor = lineText.substring(0, position.character);

    const match = textBeforeCursor.match(/([^\s"'=<>]+)=["'][^"']*$/);

    if (match) {
      return match[1];
    }

    return null;
  }

  isInJSString(document, position) {
    if (!this.isJS(document)) {
      return true;
    }

    const lineText = document.lineAt(position.line).text;
    const startOfString = lineText.lastIndexOf('"', position.character - 1);
    const endOfString = lineText.indexOf('"', position.character);

    return startOfString !== -1 && endOfString !== -1 && startOfString < endOfString;
  }

  isJS(document) {
    return document.languageId === 'javascript' || document.languageId === 'typescript';
  }

  isOutOfTag(document, position) {
    if (this.isJS(document)) {
      return false;
    }

    const start = new vscode.Position(0, 0);
    const range = new vscode.Range(start, position);

    const documentText = document.getText(range);

    const openingBracketIndex = documentText.lastIndexOf('<');
    const closingBracketIndex = documentText.lastIndexOf('>');

    return openingBracketIndex < closingBracketIndex;
  }

  createSuggestion(suggestionText, isStatic = false, onlyValues = false) {
    const items = [];

    const key = suggestionText;
    if (!isStatic) {
      suggestionText += "-";
    }
    const count = {
      color: 16,
      text: 20,
      numeric: 12
    };

    const sizing = [
      "w-",
      "min-w-",
      "max-w-",
      "h-",
      "min-h-",
      "max-h-",
      "inset-",
      "top-",
      "left-",
      "bottom-",
      "right-",
      "gap-",
      "gap-x",
      "gap-y",
      "pa-",
      "px-",
      "py-",
      "pt-",
      "pb-",
      "pr-",
      "pl-",
      "ps-",
      "pe-",
      "ma-",
      "mx-",
      "my-",
      "mt-",
      "mb-",
      "mr-",
      "ml-",
      "ms-",
      "me-",
      "translate-x-",
      "translate-y-",
    ];

    const numeric = [
      "rounded-",
      "rounded-t-",
      "rounded-b-",
      "rounded-r-",
      "rounded-l-",
      "rounded-t-r-",
      "rounded-t-l-",
      "rounded-b-r-",
      "rounded-b-l-",
      "border-",
      "border-t-",
      "border-r-",
      "border-b-",
      "border-l-",
      "outline-",
      "blur-",
      "backdrop-blur-",
      "cols-",
      "rows-",
      "col-",
      "row-",
      "c-span-",
      "r-span-"
    ]

    const percentage = [
      "scale-",
      "scale-x-",
      "scale-y-",
      "brightness-",
      "backdrop-brightness-",
      "contrast-",
      "backdrop-contrast-",
      "grayscale-",
      "backdrop-grayscale-",
      "invert-",
      "backdrop-invert-",
      "saturate-",
      "backdrop-saturate-",
      "sepia-",
      "backdrop-sepia-",
      "opacity-",
      "backdrop-opacity-",
      "z-",
    ]

    const negative = [
      "top-",
      "left-",
      "bottom-",
      "right-",
      "ma-",
      "mx-",
      "my-",
      "mt-",
      "mb-",
      "mr-",
      "ml-",
      "ms-",
      "me-",
      "translate-x-",
      "translate-y-",
    ];

    const sizeValues = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 20, 24, 28, 32, 36, 40, 44,
      48, 52, 56, 60, 64, 72, 80, 96
    ];

    if (staticValues[key]) {
      for (const i in staticValues[key]) {
        if (!onlyValues || onlyValues && i.includes(onlyValues)) {
          const item = this.createSuggestionItem(suggestionText + i, key);
          if (item)
            items.push(item);
        }
      }
    }

    if (staticValues["_i_" + key.split("-")[0]]) {
      for (const i in staticValues["_i_" + key.split("-")[0]]) {
        if (!onlyValues || onlyValues && i.includes(onlyValues)) {
          const item = this.createSuggestionItem(suggestionText + i, key);
          if (item)
            items.push(item);
        }
      }
    }

    if (!onlyValues) {
      if (sizing.includes(suggestionText)) {
        for (const i in staticValues["_"]) {
          const item = this.createSuggestionItem(suggestionText + i, key);
          if (item)
            items.push(item);
        }

        if (!suggestionText.includes("-c-")) {
          for (const sizeValue of sizeValues) {
            const item = this.createSuggestionItem(suggestionText + sizeValue, key);

            item.sortText = suggestionText + this.padNumber(sizeValue, 4);
            if (item)
              items.push(item);
          }
          if (negative.includes(suggestionText)) {
            const item = this.createSuggestionItem("-" + suggestionText, key);
            item.sortText = suggestionText.slice(1) + "-" + this.padNumber(0, 4);
            if (item)
              items.push(item);

            for (const sizeValue of sizeValues) {
              const item = this.createSuggestionItem(
                "-" + suggestionText + sizeValue,
                key
              );
              item.sortText = suggestionText.slice(1) + "-" + this.padNumber(sizeValue, 4);
              if (item)
                items.push(item);
            }
          }
        }
      }

      if (numeric.includes(suggestionText) && !suggestionText.includes("-c-")) {
        let current = 0;
        for (const sizeValue of sizeValues) {
          const item = this.createSuggestionItem(suggestionText + sizeValue, key);

          item.sortText = suggestionText + this.padNumber(sizeValue, 4);
          if (item)
            items.push(item);

          if (++current >= count.numeric)
            break;
        }
      }

      if (suggestionText.includes("-c-") && !suggestionText.includes("-alpha-")) {
        for (let i in colorNames) {
          const hsl = toHsl(colorNames[i]);
          const hex = colorNames[i].startsWith("#") ? colorNames[i].toUpperCase() : toHex(...hsl);
          const item = this.createSuggestionItem(
            suggestionText + i,
            key,
            (hex.length === 7 || hex.length === 4) ? hex : ''
          );
          if (item)
            items.push(item);

          for (let j = 1; j <= count.color; j++) {
            if (
              colorNames[i] !== "#fff" &&
              colorNames[i] !== "#ffffff" &&
              colorNames[i] != "white"
            ) {
              let c = [...hsl];
              if (c[2] !== undefined) {
                c[2] += j * config.base.units.lighten;
                if (c[2] > 100)
                  c[2] = 100;
              }

              const hex = toHex(...c);
              const item = this.createSuggestionItem(
                suggestionText + i + ":+" + j,
                key,
                hex.length === 7 ? hex : ''
              );
              item.sortText = suggestionText + i + "+" + this.padNumber(j, 4);
              if (item)
                items.push(item);
            }


            if (
              colorNames[i] !== "#000" &&
              colorNames[i] !== "#000000" &&
              colorNames[i] != "black"
            ) {
              let c = [...hsl];
              if (c[2] !== undefined) {
                c[2] -= j * config.base.units.darken;

                if (c[2] < 0)
                  c[2] = 0;
              }

              const hex = toHex(...c);
              const item = this.createSuggestionItem(
                suggestionText + i + ":-" + j,
                key,
                hex.length === 7 ? hex : ''
              );
              item.sortText = suggestionText + i + "-" + this.padNumber(j, 4);
              if (item)
                items.push(item);
            }
          }
        }
      }

      if (
        suggestionText.includes("rotate-") ||
        suggestionText.includes("skew-")
      ) {
        for (let i = 0; i <= 8; i++) {
          const item = this.createSuggestionItem(suggestionText + i * 45, key);
          item.sortText = suggestionText + "-" + this.padNumber(i * 45, 4);
          if (item)
            items.push(item);
        }
      }

      if (
        suggestionText.includes("-alpha-") ||
        percentage.includes(suggestionText)
      ) {
        for (let i = 0; i <= 20; i++) {
          const item = this.createSuggestionItem(suggestionText + i * 5, key);
          item.sortText = suggestionText + "-" + this.padNumber(i * 5, 4);
          if (item)
            items.push(item);
        }
      }
      if (suggestionText == "text-") {
        const unit = parseFloat(config.base.units.fontSize);
        for (let i = 0; i <= count.text; i++) {
          const item = this.createSuggestionItem(
            suggestionText + Math.round((0.01 / unit) * (i * 10) + 1 / (unit * 2)),
            key
          );
          item.sortText = suggestionText + "-" + this.padNumber(Math.round((0.01 / unit) * (i * 10) + 1 / (unit * 2)), 4);
          if (item)
            items.push(item);
        }
      }
    }

    const item = this.createSuggestionItem(suggestionText, key);
    if (item)
      items.push(item);

    if (!isStatic) {
      const item2 = this.createSuggestionItem(suggestionText + "inherit", key);
      if (item2)
        items.push(item2);

      const item3 = this.createSuggestionItem(suggestionText + "initial", key);
      if (item3)
        items.push(item3);
    }

    return items;
  }

  rgbToHex(r, g, b) {
    return "#" + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
  }

  componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }

  padNumber(num, digits) {
    return ("0".repeat(digits) + num).slice(-digits);
  }

  createSuggestionItem(suggestionText, key, color = "") {
    if (this.completionItemsName.includes(suggestionText)) {
      return;
    } else {
      this.completionItemsName.push(suggestionText)
    }

    const uniqueLabel = `${suggestionText}_${Date.now()}`;
    const item = new vscode.CompletionItem(uniqueLabel);
    item.label = suggestionText;
    item.kind = vscode.CompletionItemKind.Variable;
    let prop;

    if (utilityProperties[key])
      prop = utilityProperties[key];

    if (prop && typeof prop === "string") {
      item.detail = prop.replace(/-mojo-d-/g, "");
    } else if (Array.isArray(prop)) {
      item.detail = prop = prop.join(",").replace(/-mojo-d-/g, "");
    }

    if (suggestionText.endsWith("-")) {
      item.label += "***";
    }

    if (prop && item.range !== undefined) {
      const additionalTextEdit = new vscode.TextEdit(
        new vscode.Range(
          item.range.end ? item.range.end : new vscode.Position(0, 0),
          item.range.end ? item.range.end.translate(0, prop.length) : new vscode.Position(0, prop.length)
        ),
        ` (${prop})`
      );

      item.additionalTextEdits = [additionalTextEdit];
    }


    if (suggestionText.includes("-c-") && !suggestionText.includes("-alpha-")) {
      item.kind = vscode.CompletionItemKind.Color;

      color = color.trim();

      if ((color.length === 6 || color.length === 3) && !color.startsWith("#")) {
        color = "#" + color;
      }

      if (color.length === 4) {
        color += color.replace("#", "");
      }

      item.detail = color;
      item.color = color;

    }

    const documentationLink = `[Mojo Documentation](https://mojocss.com})`;
    let desc = "**Mojo's Utility**\n\n";
    if (prop) {
      let propArr = prop.split(",");
      for (let i in propArr) {
        if (propArr[i])
          propArr[i] = "`" + propArr[i] + "`";
      }
      let propText = propArr.join(" and ");
      desc += `This utility will create **${propText}** CSS ${propArr.length === 1 ? 'property' : 'properties'} in Mojo auto generated CSS.\n\n`;
    }

    item.documentation = new vscode.MarkdownString(
      `${desc}For more information read the Mojo documentation: \n\n${documentationLink}`
    );

    item.insertText = new vscode.SnippetString(suggestionText);

    return item;
  }

  createAttrSuggestionItem(suggestionText, isJs = false) {
    const item = new vscode.CompletionItem(suggestionText);
    item.kind = vscode.CompletionItemKind.Value;

    const documentationLink = `[Mojo Documentation](https://mojocss.com})`;
    let desc = "**Mojo's Attribute**\n\n";

    item.documentation = new vscode.MarkdownString(
      `${desc}For more information read the Mojo documentation: \n\n${documentationLink}`
    );
    if (!isJs) {
      item.insertText = new vscode.SnippetString(`${suggestionText}="$1"`);
    } else {
      item.insertText = new vscode.SnippetString(suggestionText);
    }

    return item;
  }

}

function getNestedFiles(directory, pattern) {
  const files = glob.sync(path.join(directory, pattern));
  const nestedFiles = {};

  files.forEach(file => {
    const relativePath = path.relative(directory, file);
    const parts = relativePath.split(path.sep);
    let currentLevel = nestedFiles;

    parts.forEach(part => {
      if (!currentLevel[part]) {
        currentLevel[part] = {};
      }
      currentLevel = currentLevel[part];

      if (part.endsWith(".md")) {
        let content = fs.readFileSync(file, 'utf-8').split("---");
        if (content.length > 1) {
          const data = content[1].split("\n");
          data.map((value) => {
            value = value.split(":");
            if (value.length > 1)
              currentLevel[value[0].trim()] = value[1].trim();
          })
        }
      }

    });
  });

  return nestedFiles;
}

class MarkdownViewerProvider {
  constructor() {
    this._onDidChange = new vscode.EventEmitter();
    this.onDidChange = this._onDidChange.event;
  }

  async provideTextDocumentContent(filePath, title) {
    let markdownContent = fs.readFileSync(filePath, 'utf-8');
    const markdownContentSpl = markdownContent.split("---");
    if (markdownContentSpl.length > 1){
      markdownContentSpl.shift();
      markdownContentSpl.shift();
      markdownContent = markdownContentSpl.join("---");
    }

    markdownContent = markdownContent.replace(/<utldemo[\s\S]*?\/utldemo>/g, '')
      .replace(/(?:```[\s\S]*?```|<[^>]*>)/g, function (match) {
        if (match.startsWith('```') || match.endsWith('```')) {
          return match;
        } else {
          return '';
        }
      })
      .replace(/class="([^"]*)"/g, function (m, p) {
        return 'class="' + p.trim().replace(/  /g, " ") + '"';
      })
      .replace(/(\n{2,}|\r\n{2,})/g, '\n')
      .replace(/    /g, "  ")

    const md = markdownit()
    const html = md.render(markdownContent)
      .replace(/--(.*?)\*\*/g, function (m, p) {
        return `<b class="bold-box">${p.trim()}</b>`
      });

    return `
            <!DOCTYPE html>
            <html>
            <head>
                <title>Markdown Preview</title>
                <style>
                body {
                    line-height: 1.6;
                    margin: 0;
                    padding: 0;
                }
                h1, h2, h3, h4, h5, h6 {
                    margin-top: 20px;
                    margin-bottom: 10px;
                }
                p {
                    margin-top: 0;
                    margin-bottom: 10px;
                }
                a{
                    text-decoration: none;
                    color: inherit
                }
                pre {
                    background-color: rgba(128,128,128,0.15);
                    padding: 10px;
                    border-radius: 5px;
                    overflow-x: auto;
                }
                code {
                    background-color: rgba(128,128,128,0.15);
                    font-family: Consolas, monospace;
                    font-size: 90%;
                    overflow: auto;
                }
                pre code {
                    background-color: transparent !important;
                }
                blockquote {
                    border-left: 2px solid rgba(128,128,128,0.15);
                    margin-left: 0;
                    padding-left: 10px;
                    border-radius: 5px;
                }
                img {
                    max-width: 100%;
                    height: auto;
                }
                table {
                    background-color: rgba(128,128,128,0.1);
                    border-collapse: collapse;
                    width: 100%;
                    border-radius: 5px;
                    overflow: hidden;
                }
                th, td {
                    padding: 8px;
                    text-align: left;
                }
                th:not(:first-child), td:not(:first-child) {
                  border-left: 1px solid rgba(128,128,128,0.1);
                }
                tr:not(:first-child) th,tr:not(:first-child) td {
                  border-top: 1px solid rgba(128,128,128,0.1);
                }
                th {
                    background-color: rgba(128,128,128,0.2);
                }
                .additional{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    position: sticky;
                    top: 0;
                    padding: 1rem 1.5rem;
                    background-color: rgba(45,45,45,0.9);
                    backdrop-filter: blur(1rem);
                    color: rgba(255,255,255,0.9);
                    gap: 1rem;
                }
                .additional a{
                    background: #FF6145;
                    color: #fff;
                    text-decoration: none;
                    padding: .5rem 1rem;
                    border-radius: .35rem;
                    font-weight: bold;
                    white-space: nowrap;
                  
                }
                hr{
                    display: none;
                }
                .main{
                    padding: 1.5rem;
                }
                .bold-box{
                    background:rgba(0,0,0,0.1);
                    padding: .15rem .25rem;
                    border-radius: .25rem;
                }
                </style>
            </head>
            <body>
                <div class="additional">
                  View additional information and examples on the Mojo CSS website:
                  <a href="https://mojocss.com/docs/${filePath.split("/docs/")[1].replace(".md", "")}" target="_blank" >Open Website</a> 
                </div>
                <div class="main">
                <h1 style="margin-top: 0">${title}</h1>
                ${html}
                </div>
            </body>
            </html>
        `;
  }
}

class DocsDataProvider {
  constructor(data) {
    this.data = data;
    this._onDidChangeTreeData = new vscode.EventEmitter();
    this.onDidChangeTreeData = this._onDidChangeTreeData.event;
  }

  refresh() {
    this._onDidChangeTreeData.fire();
  }

  getTreeItem(element) {
    return element;
  }

  async getChildren(element) {
    if (!element) {
      const sortOrder = ["guide", "config", "utilities"];
      const sortedKeys = Object.keys(this.data).sort((a, b) => {
        return sortOrder.indexOf(a) - sortOrder.indexOf(b);
      });
      return sortedKeys.map(key => {
        const item = new vscode.TreeItem(key.charAt(0).toUpperCase() + key.slice(1), vscode.TreeItemCollapsibleState.Collapsed);
        item.dataKey = key;

        return item;
      });
    } else {
      const subData = this.data[element.dataKey];
      if (subData) {
        const sortedKeys = Object.keys(subData)
          .sort((a, b) => {
            if (subData[a].catid !== subData[b].catid) {
              return subData[a].catid - subData[b].catid;
            }
            return subData[a].level - subData[b].level;
          });

        return sortedKeys.map(key => {
          const filePath = path.join(__dirname, "docs/" + element.dataKey + "/" + key);
          const item = new vscode.TreeItem(subData[key].title, vscode.TreeItemCollapsibleState.None);
          item.command = {
            command: 'mojocss-docs.openFile',
            title: 'Open File',
            arguments: [filePath, subData[key].title]
          };

          return item;
        });
      } else {
        return [];
      }
    }
  }
}

module.exports = {
  activate
};