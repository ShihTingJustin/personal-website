require('dotenv').config();
import { syncGoogleSheet } from './library/index';
import express from 'express';

const app = express();
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`server is listening on ${port}`);
});

syncGoogleSheet()
