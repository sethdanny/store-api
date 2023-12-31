require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const app = express();

const connectDB = require('./db/connect');

const notFoundMiddleware = require('./middleware/not-found');
const errorHandler = require('./middleware/error-handler');

const port = process.env.PORT || 5001;

// routes
app.get('/', (req, res) => {
  res.send('<h1>Store API </h1> <ahref="/api/v1/products"> Products route</a>');
});

// middleware
app.use(express.json());
app.use(morgan('dev'));

app.use(notFoundMiddleware);
app.use(errorHandler);

const start = async () => {
  try {
    // connectDB
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is listening on http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
