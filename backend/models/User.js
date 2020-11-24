const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    username:{
        type: String,
        trim: true
    },
    password: {
        type: String,
        trim: true
    }

});

module.exports = mongoose.model("User", UserSchema);