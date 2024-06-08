const vscode = require('vscode');
const fs = require('fs');
const markdownit = require('markdown-it');

module.exports = class MarkdownViewerProvider {
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
      .replace(/<alert-box\b[^>]*>([\s\S]*?)<\/alert-box>/g, function (m, p) {
        return "- " + p.replace(/<\/[^>]+(>|$)/g, "").replace(/\n/g, " ").replace(/    /g, "  ").trim() + "\n ";
      })
      .replace(/<s-box\b[^>]*>([\s\S]*?)<\/s-box>/g, function (m, p) {
        return "- " + p.replace(/<\/[^>]+(>|$)/g, "").replace(/\n/g, " ").trim() + "\n ";
      })
      .replace(/(?:```[\s\S]*?```|<[^>]*>)/g, function (match) {
        if (match.startsWith('```') || match.endsWith('```')) {
          return match.trim();
        } else {
          return '';
        }
      })
      .replace(/class="([^"]*)"/g, function (m, p) {
        return 'class="' + p.trim().replace(/  /g, " ") + '"';
      })
      .replace(/    /g, "  ")

    const theme = vscode.window.activeColorTheme.kind;
    const colors = {
      element: "#CE7C7D",
      attribute: "#F1BD69",
      value: "#88AB6D",
      structure: "#aaa",
    }
    if (theme === 1){
      colors.element = "#c44748";
      colors.attribute = "#e59d28";
      colors.value = "#508b22";
      colors.structure = "#555";
    }

    const md = markdownit()
    const html = md.render(markdownContent)
      .replace(/&lt;([\s\S]*?)&gt;/g, function (m, p) {
        if(p.trim().startsWith("!--"))
          return `<span style="color:${colors.structure}">${m}</span>`;

        const final = [];
        let parts = p.split(" ");
        parts = parts.filter(element => element.trim() !== "");
        final.push(`<span style="color: ${colors.element}">${parts.shift()}</span>`);
        parts.map((value) => {
          const attrSpl = value.split("=");
          if (attrSpl.length > 1)
            attrSpl[0] = `<span style="color: ${colors.attribute}">${attrSpl[0]}</span>`
          value = attrSpl.join(`<span style="color:${colors.structure}">=</span>`);

          final.push(value);
        });
        return `<span style="color:${colors.structure}">&lt;</span>${final.join(" ")}<span style="color:${colors.structure}">&gt;</span>`
      })
      .replace(/--(.*?)\*\*/g, function (m, p) {
        return `<b class="bold-box">${p.trim()}</b>`
      })

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
                    display: block;
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
                    background:rgba(0,0,0,0.2);
                    padding: .15rem .25rem;
                    border-radius: .25rem;
                }
                ol,ul{
                  margin: 0;
                  padding: 0;
                  list-style-position: inside;
                }
                </style>
            </head>
            <body>
                <div class="additional">
                  View additional information and examples on the Mojo CSS website:
                  <a href="https://mojocss.com/docs/${filePath.replace(/\\/g,"/").split("/docs/")[1].replace(".md", "")}" target="_blank" >Open Website</a> 
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