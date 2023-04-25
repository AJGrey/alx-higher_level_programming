#!/usr/bin/node

const fs = require('fs');

function writeToFile(filePath, content) {
  fs.writeFile(filePath, content, 'utf8', (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`File has been written to: ${filePath}`);
  });
}
