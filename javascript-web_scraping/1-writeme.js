#!/usr/bin/node

const fs = require('fs');
const nameFile = process.argv[2];
const str = process.argv[3];

/**
 * writeToFile - Writes a string to a file.
 * @param {string} filePath - The file path.
 * @param {string} content - The string to write to the file.
 */

function writeToFile(filePath, content) {

	fs.writeFile(filePath, content, "utf-8", (error) => {
		if (error) {

			console.error(error);
		}
	});
}

if (process.argv.length !== 4) {

	console.error("Usage: ./1-writeme.js <file-path> <content>");
	process.exit(1);
}

const filePath = process.argv[2];
const content = process.argv[3];

writeToFile(filePath, content);
