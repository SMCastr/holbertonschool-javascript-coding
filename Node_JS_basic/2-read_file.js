/* eslint-disable */
const fs = require('fs');

function countStudents(path) {
  let data;

  try {
    data = fs.readFileSync(path, 'utf8');
  } catch (err) {
    throw new Error('Cannot load the database');
  }

  const lines = data.toString().split('\n');
  const students = lines.filter((line) => line).map((line) => line.split(','));

  const num_students = students.length ? students.length - 1 : 0;
  console.log(`Number of students: ${num_students}`);

  const fields = {};
  for (const student in students) {
    if (student !== 0) {
        if (!fields[students[student][3]]) fields[students[student][3]] = [];
        fields[students[student][3]].push(students[student][0]);
    }
  }

  delete fields.field;

  for (const field in fields) {
    console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
  }
}

module.exports = countStudents;