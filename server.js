import express from 'express';
const app = express();

//middleware

import notFoundMiddleware from './middleware/not-found.js';

const port = process.env.PORT || 5000;

//Routes
app.get('/', (req, res) => {
  res.send('server is running');
});

app.use(notFoundMiddleware);

app.listen(port, () => {
  console.log(`App is listening to port:${port}`);
});
