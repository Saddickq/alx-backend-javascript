const http = require('http');
const fs = require('fs');

const countStudents = async (path) => {
  try {
    const data = await fs.promises.readFile(path, 'utf8');
    const csvFile = data.split('\n');
    const students = csvFile.slice(1, csvFile.length);

    let str = 'This is the list of our students\n';

    const csStudents = students
      .filter((student) => student.endsWith('CS'))
      .map((stu) => stu.split(',')[0]);

    const sweStudents = students
      .filter((student) => student.endsWith('SWE'))
      .map((stu) => stu.split(',')[0]);

    str += `Number of students in CS: ${
      csStudents.length
    }. List: ${csStudents.join(', ')}`;

    str += `\nNumber of students in SWE: ${
      sweStudents.length
    }. List: ${sweStudents.join(', ')}`;

    return str;
  } catch (err) {
    console.log(err);
    throw new Error('Cannot load the database');
  }
};

const app = http
  .createServer(async (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    switch (req.url) {
      case '/':
        res.end('Hello Holberton School!');
        break;
      case '/students':
        res.end(`${await countStudents(process.argv[2])}`);
        break;
      default:
        break;
    }
  })
  .listen(3000);

module.exports = app;
module.exports.countStudents = countStudents;
