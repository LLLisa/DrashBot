const express = require('express');
const app = express();
import conn from './db';
import { syncDb } from './db';
import { init } from './main';
const PORT = process.env.PORT || '1312';

const server = app.listen(PORT, () => console.log(`lisatening on port ${PORT}`));

init();

app.get('/', (req: any, res: any) => {
  res.send('hello');
});
