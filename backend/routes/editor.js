const router = require("express").Router();
let Appointment = require("../models/Appointment");

router.route("/").get((req, res) => {
//   res.send("We are on editor!");
  Appointment.find()
    .then(appt => res.json(appt))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const newAppt = new Appointment({
    name: req.body.name,
    email: req.body.email,
    date: req.body.date,
    time: req.body.time,
    apptType: req.body.apptType,
    notes: req.body.notes,
    retCode: req.body.code
  });

  console.log("Client name: " + newAppt.name);
  console.log("Adding: " + newAppt);

  newAppt.save()
    .then(() => res.json("User added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route('/:id').get((req, res) => {
    Appointment.findById(req.params.id)
        .then(appt => res.json(appt))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Appointment.findByIdAndDelete(req.params.id)
        .then(() => res.json('Exercise deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Currently, updates require every input field to be recieved.
router.route('/update/:id').post((req, res) => {
    Appointment.findById(req.params.id)
        .then(appt => {
            appt.name = req.body.name;
            
            appt.save()
                .then(() => res.json('Exercise updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })

})

module.exports = router;