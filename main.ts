import { syncDb } from './db';
import axios from 'axios';
import * as dotenv from 'dotenv';
dotenv.config();
import { exec } from 'child_process';
import fetch from 'node-fetch';

// syncDb();

const { REDDIT_USERNAME, REDDIT_PASSWORD, REDDIT_CLIENT_ID } = process.env;

const test = fetch('https://fsf.org');

const init = async () => {
  console.log('hi');
  try {
    // const response = await axios.post('https://ssl.reddit.com/api/login', {
    //   headers: {
    //     username: REDDIT_USERNAME,
    //     password: REDDIT_PASSWORD,
    //   },
    // });
    // console.log(response);
    // const inbox = await axios.get('https://ssl.reddit.com/api/message/inbox', {
    //   headers: {
    //     cookie: '2336950354937,2022-10-31T21:49:07,8e98d4f4d973f620a4a0b1131810b65f3fecbafb',
    //   },
    // });
    // console.log(inbox);
  } catch (error) {
    console.log(error);
  }
};

export { init };

//curl -duser=USERNAME -dpasswd=PASSWORD -dapi_type=json https://ssl.reddit.com/api/login

//to get access token: curl -X POST -d 'grant_type=password&username=reddit_bot&password=snoo' --user 'p-jcoLKBynTLew:gko_LXELoV07ZBNUXrvWZfzE3aI' https://www.reddit.com/api/v1/access_token
