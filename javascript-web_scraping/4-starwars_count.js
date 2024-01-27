!/usr/bin/node

const request = require('request');

/**
 * getWedgeAntillesCount - Prints the number of movies where the character "Wedge Antilles" is present.
 * @param {string} apiUrl - The API URL of the Star Wars API: https://swapi-api.hbtn.io/api/films/
 */
function getWedgeAntillesCount(apiUrl) {
	request.get(apiUrl, (error, response, body) => {
		if (error) {
			console.error(error);
		} else {
			try {
				const filmsData = JSON.parse(body);
				const wedgeAntillesFilms = filmsData.results.filter((film) =>
					film.characters.includes('https://swapi-api.hbtn.io/api/people/18/')
				);
				console.log(wedgeAntillesFilms.length);
			} catch (parseError) {
				console.error(parseError);
			}
		}
	});
}

// Check if the correct number of command line arguments is provided
if (process.argv.length !== 3) {
	console.error('Usage: ./4-starwars_count.js <api-url>');
	process.exit(1);
}

const apiUrl = process.argv[2];

getWedgeAntillesCount(apiUrl);