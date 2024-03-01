const fs = require('fs').promises;

const readDatabase = (path) => new Promise((resolve, rejects) => {
  fs.readFile(path, 'utf-8').then((d) => {
    const data = d.split('\n').splice(1);
    const fieldObj = {};
    if (data) {
      data.forEach((e) => {
        if (e.length) {
          const line = e.split(',');
          const lineLen = line.length;
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

    const result = {};

    for (const field in fieldObj) {
      if (field in fieldObj) {
        const { data } = fieldObj[field];
        result[field] = data;
      }
    }
    resolve(result);
  }).catch(() => {
    rejects(new Error());
  });
});

module.exports = readDatabase;
