#!/usr/bin/node

const request = require('request');
const url = process.argv[2];

request(url, (err, res, body) => {
  if (err) {
    console.log(err);
    return;
  }
  const completedTasks = {};
  const tasks = JSON.parse(body);
  for (const task of tasks) {
    if (task.completed === true) {
      if (completedTasks[task.userId] === undefined) {
        completedTasks[task.userId] = 1;
      } else {
        completedTasks[task.userId] += 1;
      }
    }
  }
  console.log(completedTasks);
});