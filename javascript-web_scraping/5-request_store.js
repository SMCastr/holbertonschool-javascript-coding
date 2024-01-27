#!/usr/bin/node

const request = require('request');
const fs = require('fs');

/**
 * requestAndStore - Gets the contents of a webpage and stores it in a file.
 * @param {string} url - The URL to request.
 * @param {string} filePath - The file path to store the body response.
 */
function requestAndStore(url, filePath) {
	// Use the request module to make a GET request to the specified URL
	request.get(url, (error, response, body) => {
		if (error) {
			// If an error occurred during the request, print the error object
			console.error(error);
		} else {
			// Write the body response to the specified file path in utf-8
			fs.writeFile(filePath, body, 'utf-8', (writeError) => {
				if (writeError) {
					// If an error occurred during writing, print the write error object
					console.error(writeError);
				}
			});
		}
	});
}

// Check if the correct number of command line arguments is provided
if (process.argv.length !== 4) {
	// If not, print an error message and exit
	console.error('Usage: ./5-request_store.js <url> <file-path>');
	process.exit(1);
}

// Get the URL and file path from the command line arguments
const url = process.argv[2];
const filePath = process.argv[3];

// Call the requestAndStore function with the provided URL and file path
requestAndStore(url, filePath);
