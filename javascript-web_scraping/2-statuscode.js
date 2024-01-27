#!/usr/bin/node

const request = require('request');

/**
 * getStatusCode - Displays the status code of a GET request.
 * @param {string} url - The URL to request (GET).
 */
function getStatusCode(url) {
	// Use the request module to make a GET request to the specified URL
	request.get(url, (error, response) => {
		if (error) {
			// If an error occurred during the request, print the error object
			console.error(error);
		} else {
			// Print the status code
			console.log(`code: ${response.statusCode}`);
		}
	});
}

// Check if the correct number of command line arguments is provided
if (process.argv.length !== 3) {
	// If not, print an error message and exit
	console.error('Usage: ./2-statuscode.js <url>');
	process.exit(1);
}

// Get the URL from the command line arguments
const url = process.argv[2];

// Call the getStatusCode function with the provided URL
getStatusCode(url);
