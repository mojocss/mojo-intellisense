const vscode = require('vscode');
const chokidar = require("chokidar");
const CompletionProvider = require("./providers/CompletionProvider");
const DocsDataProvider = require("./providers/DocsDataProvider");
const MarkdownViewerProvider = require("./providers/MarkdownViewerProvider");
const { getAlphabetCharacters, getNestedFiles } = require("./utils/utils");



function activate(context) {
  try {
    const workspaceFolders = vscode.workspace.workspaceFolders;
    const completionProvider = new CompletionProvider();
    completionProvider.loadConfig();

    for (let i in workspaceFolders) {
      const configFile = workspaceFolders[i].uri.fsPath + "/mojo.config.js";
      const watcher = chokidar.watch(configFile);

      watcher.on("change", () => {
        const status = completionProvider.loadConfig();
        if (status)
          vscode.window.showInformationMessage('Mojo CSS Intellisense has been reconfigured.');
        else
          vscode.window.showErrorMessage("Failed to read the 'mojo.config.js' file.");
      });
    }

    context.subscriptions.push(
      vscode.languages.registerCompletionItemProvider(
        {scheme: 'file', language: '*'},
        new CompletionProvider(),
        ...getAlphabetCharacters()
      )
    );
  } catch (e) {
    console.log(e)
    vscode.window.showErrorMessage("Initialization of the Mojo CSS Intellisense completion provider has failed.");
  }

  try {
    const nestedFiles = getNestedFiles(__dirname, 'docs');
    if (nestedFiles) {
      const docsDataProvider = new DocsDataProvider(nestedFiles);
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
  } catch (e) {
    console.log(e)
    vscode.window.showErrorMessage("Initialization of the Mojo CSS Intellisense data provider has failed.");
  }
}



module.exports = {
  activate
};