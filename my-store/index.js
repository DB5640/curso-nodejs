/* eslint-disable no-console */
const express = require('express');
const routerApi = require('./routes')
require('dotenv').config()
const {logErrors, errorHandler, boomErrorHandler} = require('./middlewares/error.handler')


const app = express();


const port = 3000;

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!');
});


routerApi(app);

app.use(logErrors)
app.use(boomErrorHandler)
app.use(errorHandler)



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

(function validateEnviroment(app){

  const isDevelopment = process.env.NODE_ENV === 'development';

  if (isDevelopment) {
    console.log('Running in development mode, express-debug panel is mounted at /express-debug');
    require('express-debug', {})(app);
  }

})(app);
