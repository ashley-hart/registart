const express = require("express");
const mongoose = require('mongoose');
const app = express();
const cors = require("cors");
const port = 5000;
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
app.use('/editor', editorRouter);
app.use('/contact', contactRouter);


app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

// ROUTES
app.get("/", (req, res) => {
  res.send("We are on home!");
});

