const mongoose = require("mongoose");

// Make sure our date exists in the future.
// function dateInFuture(candidate) {
//   const schemaDate = new Date(candidate);
//   const currentDate = new Date();
// }


// Check if our data is in a 48 hour window.
// function canBeModified(candidate) {
//   console.log(candidate);
//   let schemaDate = new Date(candidate);
//   let currentDate = Date.now();

//   console.log("Schema Date: " + (new Date(schemaDate).toDateString()));
//   console.log("Current date: " + (new Date(currentDate).toDateString()));
//   return true;

// }

// TODO: Update this to keep it consistent with the form data.
const ApptSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
    },
    date: {
      type: String,
      trim: true,
      required: true,
      min: Date.now(),
      // validate: canBeModified(),
    },
    time: {
      type: String,
      trim: true,
      required: true,
    },
    phoneNumber: {
      type: String,
      trim: true,
      required: true,
    },
    apptType: {
      type: String,
      trim: true,
      required: true,
    },
    notes: {
      type: String,
      trim: true,
      required: true,
    },
    retCode: {
      type: String,
      trim: true,
      required: true,
    },
  },
  {
    // Make Mongoose use Unix time (seconds since Jan 1, 1970)
    timestamps: { currentTime: () => Math.floor(Date.now() / 1000) },
  }
);

module.exports = mongoose.model("Appointment", ApptSchema);
