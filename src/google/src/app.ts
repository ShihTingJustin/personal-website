// import { getI18nData } from './src/services/index';

// (async () => {
//   const data = await getI18nData();
//   console.log(data);
// })();

import express from 'express';

const app = express();
const port = 3000;


app.listen(port, () => {
  console.log(`server is listening on ${port}`);
});
