#!/usr/bin/node


const request = require('request');
const fs = require('fs');


/**
 * requestAndStore - Gets the contents of a webpage and stores it in a file.
 * @param {string} url - The URL to request.
 * @param {string} filePath - The file path to store the body response.
 */

function requestAndStore(url, filePath) {

	request.get(url, (error, response, body) => {
		if (error) {
			console.error(error);
		} else {

			fs.writeFile(filePath, body, 'utf-8', (writeError) => {
				if (writeError) {
					console.error(writeError);
				}
			});
		}
	});
}


if (process.argv.length !== 4) {

	console.error('Usage: ./5-request_store.js <url> <file-path>');
	process.exit(1);
}


const url = process.argv[2];
const filePath = process.argv[3];

requestAndStore(url, filePath);
