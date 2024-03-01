const http = require('http');
const fs = require('fs').promises;

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

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const result = 'This is the list of our students';
    countStudents(process.argv[2]).then((data) => {
      res.end(`${result}\n${data}`);
    }).catch((err) => res.end(`${result}\n${err.message}`));
  }
});

const port = 1245;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
module.exports = app;
