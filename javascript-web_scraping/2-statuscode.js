#!/usr/bin/node

const request = require('request');

/**
 * getStatusCode - Displays the status code of a GET request.
 * @param {string} url - The URL to request (GET).
 */

function getStatusCode(url) {

	request.get(url, (error, response) => {
		if (error) {
			console.error(error);
		} else {
			console.log(`code: ${response.statusCode}`);
		}
	});
}

if (process.argv.length !== 3) {
	console.error('Usage: ./2-statuscode.js <url>');
	process.exit(1);
}

const url = process.argv[2];

getStatusCode(url);
