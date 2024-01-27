#!/usr/bin/node

const fs = require('fs');

/**
 * readFileContent - Lee e imprime el contenido de un archivo.
 * @param {string} filePath - La ruta del archivo.
 */
function readFileContent(filePath) {
  fs.readFile(filePath, 'utf-8', (error, data) => {
    if (error) {
      console.error(error);
    } else {
      console.log(data);
    }
  });
}

if (process.argv.length !== 3) {
  console.error('Usage: ./0-readme.js <file-path>');
  process.exit(1);
}

const filePath = process.argv[2];

readFileContent(filePath);
