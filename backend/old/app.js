const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const port = 5000; // changed from 3000 to avoid react conflicts
const Appointment = require("../models/Appointment.js");
require("dotenv/config");

console.log("DB Connection State: " + mongoose.connection.readyState);
// This is how we start listening on the port.
app.listen(port, () => {
  console.log(`Example app listening at http://localhost: ${port}!`);
});

// CONNECT TO THE DATABASE
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

// https://daveceddia.com/access-control-allow-origin-cors-errors-in-react-express/
app.use(cors());
app.use(bodyParser.json());

// nodemon will allow you to see changes as you make them withoug manual restarts.

// Import routes
const toEditor = require("./editor");

app.use("/editor", toEditor);

// Middlewares
// app.use('/about', () => {
//   console.log('Test of middleware for /about route.');
// } );

// app.use('/', () => {
//   console.log('Test of middleware for / route.');
// } );

// ROUTES
// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// .get --> shoots a message back at us
// .post --> gives a message to the database
// .delete --> removes stuff from a database
// .patch --> updates stuff already in the database
// app.get("/about", (req, res) => {
//   res.send("Potatoes and Cheese!");
// });

// app.get("/contact", (req, res) => {
//   res.send("Gaming Xandparents!");
// });


