const mongoose = require("mongoose");

const ContactSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    date: {
      type: String,
      trim: true,
    },
    notes: {
      type: String,
      trim: true,
    },
  },
  {
    // Make Mongoose use Unix time (seconds since Jan 1, 1970)
    timestamps: { currentTime: () => Math.floor(Date.now() / 1000) },
  }
);

module.exports = mongoose.model("ContactInfo", ContactSchema);