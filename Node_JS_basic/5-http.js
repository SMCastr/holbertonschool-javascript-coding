/* eslint-disable */
const http = require('http');
const countStudents = require('./3-read_file_async');

const DATABASE = 'database.csv';

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    countStudents(DATABASE)
      .then((data) => {
        res.end(`This is the list of our students\n${data}`);
      })
      .catch((err) => {
        res.end(err.message);
      });
  } else {
    res.statusCode = 404;
    res.end('Not found');
  }
});

app.listen(1245);

module.exports = app;
