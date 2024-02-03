/* eslint-disable */
const express = require('express');
const countStudents = require('./3-read_file_async');

const DATABASE = 'database.csv';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(DATABASE)
    .then((data) => {
      res.send(`This is the list of our students\n${data}`);
    })
    .catch((err) => {
      res.send(err.message);
    });
});

app.listen(1245);

module.exports = app;
