const vscode = require('vscode');
const path = require('path');

module.exports = class DocsDataProvider {
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
          const filePath = path.join(__dirname, "../docs/" + element.dataKey + "/" + key);
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