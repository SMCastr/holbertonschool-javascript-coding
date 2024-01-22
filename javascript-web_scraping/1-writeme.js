#!/usr/bin/node

const fs = require('fs');

/**
 * writeToFile - Writes a string to a file.
 * @param {string} filePath - The file path.
 * @param {string} content - The string to write to the file.
 */
function writeToFile(filePath, content) {
  // Write the content to the file in utf-8
  fs.writeFile(filePath, content, 'utf-8', (error) => {
    if (error) {
      // If an error occurred during writing, print the error object
      console.error(error);
    }
  });
}

// Check if the correct number of command line arguments is provided
if (process.argv.length !== 4) {
  // If not, print an error message and exit
  console.error('Usage: ./1-writeme.js <file-path> <content>');
  process.exit(1);
}

// Get the file path and content from the command line arguments
const filePath = process.argv[2];
const content = process.argv[3];

// Call the writeToFile function with the provided file path and content
writeToFile(filePath, content);
