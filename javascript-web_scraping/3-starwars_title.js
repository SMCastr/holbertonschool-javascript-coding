#!/usr/bin/node

const request = require('request');

/**
 * getStarWarsTitle - Prints the title of a Star Wars movie based on the episode number.
 * @param {number} movieId - The movie ID.
 */
function getStarWarsTitle(movieId) {
  // Use the request module to make a GET request to the Star Wars API endpoint
  const apiUrl = `https://swapi-api.hbtn.io/api/films/${movieId}`;
  request.get(apiUrl, (error, response, body) => {
    if (error) {
      // If an error occurred during the request, print the error object
      console.error(error);
    } else {
      try {
        // Parse the JSON response
        const movieData = JSON.parse(body);
        // Print the title of the movie
        console.log(movieData.title);
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
  console.error('Usage: ./3-starwars_title.js <movie-id>');
  process.exit(1);
}

// Get the movie ID from the command line arguments
const movieId = process.argv[2];

// Call the getStarWarsTitle function with the provided movie ID
getStarWarsTitle(movieId);
