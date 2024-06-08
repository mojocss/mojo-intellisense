const fs = require('fs');
const path = require('path');

function getAlphabetCharacters() {
  const alphabetCharacters = [];
  for (let charCode = 'a'.charCodeAt(0); charCode <= 'z'.charCodeAt(0); charCode++) {
    alphabetCharacters.push(String.fromCharCode(charCode));
  }
  return alphabetCharacters;
}

function getNestedFiles(directory, pattern) {
  const dir = path.join(directory, pattern);
  const nestedFiles = {};

  fs.readdirSync(dir).forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      nestedFiles[file] = getNestedFiles(dir, file);
    } else {
      nestedFiles[file] = {};

      if (file.endsWith(".md")) {
        let content = fs.readFileSync(filePath, 'utf-8').split("---");
        if (content.length > 1) {
          const data = content[1].split("\n");
          data.map((value) => {
            value = value.split(":");
            if (value.length > 1)
              nestedFiles[file][value[0].trim()] = value[1].trim();
          })
        }
      }
    }
  });

  return nestedFiles;
}

module.exports = {
  getAlphabetCharacters,
  getNestedFiles
};
