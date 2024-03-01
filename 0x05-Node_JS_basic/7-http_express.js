const express = require('express');
const fs = require('fs').promises;

const app = express();
const port = 1245;

const countStudents = (path) => new Promise((resolve, rejects) => {
  fs.readFile(path, 'utf-8').then((d) => {
    const data = d.split('\n').splice(1);
    let dataLen = 0;
    const fieldObj = {};
    if (data) {
      data.forEach((e) => {
        if (e.length) {
          const line = e.split(',');
          const lineLen = line.length;
          dataLen += 1;
          const filed = line[lineLen - 1];
          const firstName = line[0];
          if (filed in fieldObj) {
            fieldObj[filed].data.push(firstName);
            fieldObj[filed].count += 1;
          } else {
            fieldObj[filed] = {
              data: [firstName],
              count: 1,
            };
          }
        }
      });
    }

    let result = `Number of students: ${dataLen}`;

    for (const field in fieldObj) {
      if (field in fieldObj) {
        const data = fieldObj[field].data.join(', ');
        const fLen = fieldObj[field].count;
        result += `\nNumber of students in ${field}: ${fLen}. List: ${data}`;
      }
    }
    resolve(result);
  }).catch(() => {
    rejects(new Error('Cannot load the database'));
  });
});

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const result = 'This is the list of our students';
  countStudents(process.argv[2]).then((data) => {
    res.send(`${result}\n${data}`);
  }).catch((err) => res.send(`${result}\n${err.message}`));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
module.exports = app;
