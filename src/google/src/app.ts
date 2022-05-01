require('dotenv').config();
import { getI18nData } from './services/index';

(async () => {
  const data = await getI18nData();
  console.log(data);
})();

import express from 'express';

const app = express();
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`server is listening on ${port}`);
});
