const express = require('express');
const { countStudents } = require('./5-http');
const app = express();

app.get('/', (_, res) => {
  res.header('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', async (_, res) => {
  res.header('Content-Type', 'text/plain');
  res.send(`${await countStudents(process.argv[2])}`);
});

app.listen(1245);

module.exports = app;
