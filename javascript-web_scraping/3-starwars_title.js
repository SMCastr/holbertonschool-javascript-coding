#!/usr/bin/node
const request = require('request');
/**
 * getStarWarsTitle - Prints the title of a Star Wars movie based on the episode number.
 * @param {number} movieId - The movie ID.
 */
function getStarWarsTitle(movieId) {
	const apiUrl = `https://swapi-api.hbtn.io/api/films/${movieId}`;
	request.get(apiUrl, (error, response, body) => {
		if (error) {
			console.error(error);
		} else {
			try {
				const movieData = JSON.parse(body);
				console.log(movieData.title);
			} catch (parseError) {
				console.error(parseError);
			}
		}
	});
}

if (process.argv.length !== 3) {
	console.error('Usage: ./3-starwars_title.js <movie-id>');
	process.exit(1);
}


const movieId = process.argv[2];

getStarWarsTitle(movieId);
