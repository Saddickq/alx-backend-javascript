const express = require('express');

const app = express();

app
  .get('/', (_, res) => {
    res.send('Hello Holberton School!');
  })
  .listen(1245);

module.exports = app;
