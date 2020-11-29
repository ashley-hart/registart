const express = require("express");
const mongoose = require('mongoose');
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;
require('dotenv').config();

app.use(cors());
app.use(express.json());

mongoose.connect(
  process.env.DB_CONNECTION,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (req, res) => {
    console.log("Connected to the database!");
  }
);

const editorRouter = require('./routes/editor');
const contactRouter = require('./routes/contact');
const signInRouter = require('./routes/signin');
app.use('/editor', editorRouter);
app.use('/contact', contactRouter);
app.use('/signin', signInRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('app/build'));
}

// ROUTES
app.get("/", (req, res) => {
  res.send("We are on home!");
});

