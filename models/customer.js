const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: [true, "First name is required"],
    },
    lastname: {
        type: String,
        required: [true, "Last name is required"],
    },
    email: {
        type: String,
        required: [true, "E-mail is required"],
        unique: true,
    },
});

module.exports = mongoose.model("Customer", customerSchema);
