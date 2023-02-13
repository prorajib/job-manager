import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config();

import 'express-async-errors';
// database and authenticateUser
import connectDB from './db/connect.js';

// routers
import authRouter from './routes/authRoutes.js';
import jobsRouter from './routes/jobRoutes.js';
//middleware

import notFoundMiddleware from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';
const port = process.env.PORT || 5000;

app.use(express.json());

//Routes
app.get('/', (req, res) => {
  //throw new Error('error');
  res.send('server is running');
});

app.get('/api/v1', (req, res) => {
  //throw new Error('error');
  res.send('server is running');
});
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/jobs', jobsRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`App is listening to port:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
