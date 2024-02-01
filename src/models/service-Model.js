const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    logoPath: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    }
});

const Service = mongoose.model("Project", serviceSchema);

module.exports = Service;