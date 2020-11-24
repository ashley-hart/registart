const mongoose = require("mongoose");

// TODO: Update this to keep it consistent with the form data.
const ApptSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
    },
    date: {
      // TODO: Change to a Date()!
      type: String,
      trim: true,
    },
    time: {
      type: String,
      trim: true,
    },
    apptType: {
      type: String,
      trim: true,
    },
    notes: {
      type: String,
      trim: true,
    },
    retCode: {
      type: String,
      trim: true,
    },
  },
  {
    // Make Mongoose use Unix time (seconds since Jan 1, 1970)
    timestamps: { currentTime: () => Math.floor(Date.now() / 1000) },
  }
);

module.exports = mongoose.model("Appointment", ApptSchema);
