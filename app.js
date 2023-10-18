require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const app = express();

const port = process.env.PORT || 5001;

app.get('/', (req, res) => {
  res.send('Welcome to the store');
});

// middleware
app.use(express.json());
app.use(morgan('dev'));

app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
