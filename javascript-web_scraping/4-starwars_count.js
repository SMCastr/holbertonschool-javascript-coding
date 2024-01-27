!/usr/bin/node

const request = require('request');

/**
 * getWedgeAntillesCount - Prints the number of movies where the character "Wedge Antilles" is present.
 * @param {string} apiUrl - The API URL of the Star Wars API: https://swapi-api.hbtn.io/api/films/
 */
function getWedgeAntillesCount(apiUrl) {
	// Use the request module to make a GET request to the Star Wars API endpoint
	request.get(apiUrl, (error, response, body) => {
		if (error) {
			// If an error occurred during the request, print the error object
			console.error(error);
		} else {
			try {
				// Parse the JSON response
				const filmsData = JSON.parse(body);
				// Filter films where "Wedge Antilles" is present
				const wedgeAntillesFilms = filmsData.results.filter((film) =>
					film.characters.includes('https://swapi-api.hbtn.io/api/people/18/')
				);
				// Print the number of films where "Wedge Antilles" is present
				console.log(wedgeAntillesFilms.length);
			} catch (parseError) {
				// If an error occurred while parsing the JSON response, print the parse error
				console.error(parseError);
			}
		}
	});
}

// Check if the correct number of command line arguments is provided
if (process.argv.length !== 3) {
	// If not, print an error message and exit
	console.error('Usage: ./4-starwars_count.js <api-url>');
	process.exit(1);
}

// Get the API URL from the command line arguments
const apiUrl = process.argv[2];

// Call the getWedgeAntillesCount function with the provided API URL
getWedgeAntillesCount(apiUrl);
