import express from 'express';
const app = express();

//middleware

import notFoundMiddleware from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';
const port = process.env.PORT || 5000;

//Routes
app.get('/', (req, res) => {
  throw new Error('error');
  res.send('server is running');
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

app.listen(port, () => {
  console.log(`App is listening to port:${port}`);
});
