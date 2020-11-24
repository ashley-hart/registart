const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const Appointment = require("../models/Appointment");
router.use(bodyParser.json());

router.get("/", (req, res) => {
  res.send("Appointment editor doin' work! (I hope...)");
});

router.get("/apptOne", (req, res) => {
  res.send("This is the first appointment in the database!");
});

router.get("/apptTwo", (req, res) => {
  res.send("This is the second appointment in the database!");
});

console.log("DB Connection State: " + mongoose.connection.readyState);

// Parse our request so can handle the data properly.
router.post('/', async (req, res) => {
  console.log(req.body);
  const addAppt = new Appointment({
    name: req.body.name,
    date: req.body.date,
    time: req.body.time,
    apptType: req.body.apptType,
    note: req.body.notes
  });
  // console.log("DB Connection State: " + mongoose.connection.readyState);
  // console.log(addAppt);
  // console.log(res.json(addAppt)); 
  // res.json(addAppt);
  try {
    // const newAppt = await addAppt.save();
    res.send(`Created new appointment for ${addAppt.name}`);
    // console.log("Made new appt: " + addAppt);
    res.json(newAppt)
  } catch (err) {
    res.send({ message: err });
    // res.json({ message: err.message})
    // res.end();
  }

  console.log("exiting");
  res.end();
});

module.exports = router;
