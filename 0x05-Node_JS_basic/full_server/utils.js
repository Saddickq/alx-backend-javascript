const fs = require('fs');

export const readDatabase = async (path) => new Promise((resolve, reject) => {
  fs.promises
    .readFile(path, 'utf8')
    .then((data) => {
      const db = data.split('\n');
      const students = db.slice(1, db.length);
      const csStudents = students
        .filter((student) => student.endsWith('CS'))
        .map((stu) => stu.split(',')[0]);

      const sweStudents = students
        .filter((student) => student.endsWith('SWE'))
        .map((stu) => stu.split(',')[0]);

      resolve({
        CS: csStudents,
        SWE: sweStudents,
      });
    })
    .catch(() => {
      reject(new Error('Cannot load the database'));
    });
});
