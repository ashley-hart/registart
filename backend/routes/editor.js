const router = require("express").Router();
const auth = require("../middleware/auth");
let Appointment = require("../models/Appointment");
// const User = require("../models/User");

router.route("/").get((req, res) => {
  Appointment.find()
    .then((appt) => res.json(appt))
    .catch((err) => res.status(400).json("Error: " + err));
});

// TODO: Add conflict checking for new submissions.
router.route("/add").post((req, res) => {
  const newAppt = new Appointment({
    name: req.body.name,
    email: req.body.email,
    date: req.body.date,
    time: req.body.time,
    apptType: req.body.apptType,
    notes: req.body.notes,
    retCode: req.body.code,
  });

  console.log("Client name: " + newAppt.name);
  console.log("Adding: " + newAppt);

  newAppt
    .save()
    .then(() => res.json("Appointment added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

// Lookup by id.
router.route("/:id").get((req, res) => {
  Appointment.findById(req.params.id)
    .then((appt) => res.json(appt))
    .catch((err) => res.status(400).json("Error: " + err));
});

// Lookup by retcode --> may have to go back to mongoDB id
router.route("/lookup").get((req, res) => {
  console.log(req.body);
  res.json({msg: ":)"});

  // Appointment.findOne({ retCode: req.body.retCode, name: req.body.name })
  //   .then((appt) => res.json(appt))
  //   .catch((err) => res.status(400).json("Error: " + err));
});

// WORKING ON THIS --> only admin can delete
router.route("/:id").delete(async (req, res) => {
  console.log("User: " + req.user);
  // console.log(req);
  try {
    const deletedAppointment = await Appointment.findByIdAndDelete(
      req.params.id
    );
    console.log(deletedAppointment);

    if (deletedAppointment) {
      console.log(
        "Successfully deleted the following entry from the database: " +
          deletedAppointment
      );
      return res.status(200).json(deletedAppointment);
    } else {
      console.log("Error: Target for deletion not found in database.");
      return res
        .status(404)
        .json({ msg: "Appointment id not found for DELETE request." });
    }
  } catch (err) {
    console.log("Error: Could not delete appointment.");
    // res.status(500).json(err.message);
  }
});

// Currently, updates require every input field to be recieved.
router.route("/update/:id").post((req, res) => {
  console.log("UPDATING APPOINTMENT!");
  console.log(req.body);

  // TODO: Fix so we cannot update within 48 hours of the appt time.
  // Update every feild except for the retrival code.
  Appointment.findById(req.params.id).then((appt) => {
    appt.name = req.body.name;
    appt.email = req.body.email;
    appt.data = req.body.date;
    appt.time = req.body.time;
    appt.apptType = req.body.apptType;
    appt.notes = req.body.notes;

    appt
      .save()
      .then(() => res.json("Appointment updated!"))
      .catch((err) => res.status(400).json("Error: " + err));
  });
});

module.exports = router;
