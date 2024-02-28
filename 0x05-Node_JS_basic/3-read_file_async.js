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

    console.log(`Number of students: ${dataLen}`);
    for (const field in fieldObj) {
      if (field in fieldObj) {
        const data = fieldObj[field].data.join(', ');
        const fLen = fieldObj[field].count;
        console.log(`Number of students in ${field}: ${fLen}. List: ${data}`);
      }
    }
    resolve('Done');
  }).catch(() => {
    rejects(new Error('Cannot load the database'));
  });
});

module.exports = countStudents;
