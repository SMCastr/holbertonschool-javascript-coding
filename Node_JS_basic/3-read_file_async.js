/* eslint-disable */
const fs = require('fs').promises;

function countStudents(path) {
  return fs.readFile(path, 'utf8')
    .then((data) => {
      const lines = data.split('\n');
      const students = lines.filter((line) => line).map((line) => line.split(','));

      const num_students = students.length ? students.length - 1 : 0;
      console.log(`Number of students: ${num_students}`);

      const fields = {};
      for (const student of students) {
        const field = student[3];
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(student[0]);
      }

        delete fields.field;

      for (const field in fields) {
        console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
      }
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}

module.exports = countStudents;