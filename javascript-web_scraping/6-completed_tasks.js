#!/usr/bin/node
const request = require('request');
/**
 * getCompletedTasksByUser - Computes the number of tasks completed by user id.
 * @param {string} apiUrl - The API URL: https://jsonplaceholder.typicode.com/todos
 */
function getCompletedTasksByUser(apiUrl) {
	request.get(apiUrl, (error, response, body) => {
		if (error) {
			console.error(error);
		} else {
			try {
				const tasksData = JSON.parse(body);
				const completedTasks = tasksData.filter((task) => task.completed);
				const completedTasksByUser = completedTasks.reduce((acc, task) => {
					acc[task.userId] = (acc[task.userId] || 0) + 1;
					return acc;
				}, {});

				console.log(completedTasksByUser);
			} catch (parseError) {
				console.error(parseError);
			}
		}
	});
}

if (process.argv.length !== 3) {
	console.error('Usage: ./6-completed_tasks.js <api-url>');
	process.exit(1);
}


const apiUrl = process.argv[2];

getCompletedTasksByUser(apiUrl);