const router = require("express").Router();
let ContactInfo = require("../models/ContactInfo");

router.route("/").get((req, res) => {
  ContactInfo.find()
    .then((cinfo) => res.json(cinfo))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const newContact = new ContactInfo({
    name: req.body.name,
    email: req.body.email,
    notes: req.body.notes,
  });

  console.log("Client name: " + newContact.name);
  console.log("Adding: " + newContact);

  newContact
    .save()
    .then(() => res.json("Contact information added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;