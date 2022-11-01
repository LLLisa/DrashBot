const express = require('express');
const app = express();
const conn = require('./db');
// import conn from './db';
// import { syncDb } from './db';
const { init } = require('./main');
// import { init } from './main';
const PORT = process.env.PORT || '1312';

const server = app.listen(PORT, () =>
  console.log(`lisatening on port ${PORT}`)
);

init();

app.get('/', (req, res, next) => {
  res.send('hello');
});
