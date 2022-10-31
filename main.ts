import { syncDb } from './db';
import * as dotenv from 'dotenv';
dotenv.config();

console.log(process.env.TEST_VARIABLE);

syncDb();
