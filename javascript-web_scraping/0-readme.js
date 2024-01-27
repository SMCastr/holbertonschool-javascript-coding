#!/usr/bin/node

const fs = require("fs");
const nameFile = process.argv[2];

/**
 * readFileContent - Reads and prints the content of a file.
 * @param {string} filePath - The file path.
 */
function readFileContent(filePath) {
	// Read the content of the file in utf-8
	fs.readFile(filePath, "utf-8", (error, data) => {
		if (error) {
			// If an error occurred during the reading, print the error object
			console.error(error);
		} else {
			// Print the content of the file
			console.log(data);
		}
	});
}

// Check if the correct number of command line arguments is provided
if (process.argv.length !== 3) {
	// If not, print an error message and exit
	console.error("Usage: ./0-readme.js <file-path>");
	process.exit(1);
}

// Get the file path from the command line arguments
const filePath = process.argv[2];

// Call the readFileContent function with the provided file path
readFileContent(filePath);
