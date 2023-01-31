import express from 'express';
const app = express();
const port = process.env.PORT || 5000;
app.get('/', (req, res) => {
  res.send('server is running');
});
app.listen(port, () => {
  console.log(`App is listening to port:${port}`);
});
