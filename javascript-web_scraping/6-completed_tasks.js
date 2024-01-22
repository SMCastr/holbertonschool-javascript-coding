#!/usr/bin/node

const request = require('request');

/**
 * getCompletedTasksByUser - Computes the number of tasks completed by user id.
 * @param {string} apiUrl - The API URL: https://jsonplaceholder.typicode.com/todos
 */
function getCompletedTasksByUser(apiUrl) {
  // Use the request module to make a GET request to the specified API URL
  request.get(apiUrl, (error, response, body) => {
    if (error) {
      // If an error occurred during the request, print the error object
      console.error(error);
    } else {
      try {
        // Parse the JSON response
        const tasksData = JSON.parse(body);
        // Filter tasks where "completed" is true
        const completedTasks = tasksData.filter((task) => task.completed);
        // Group the completed tasks by user id
        const completedTasksByUser = completedTasks.reduce((acc, task) => {
          acc[task.userId] = (acc[task.userId] || 0) + 1;
          return acc;
        }, {});
        // Print the completed tasks by user id
        console.log(completedTasksByUser);
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
  console.error('Usage: ./6-completed_tasks.js <api-url>');
  process.exit(1);
}

// Get the API URL from the command line arguments
const apiUrl = process.argv[2];

// Call the getCompletedTasksByUser function with the provided API URL
getCompletedTasksByUser(apiUrl);
