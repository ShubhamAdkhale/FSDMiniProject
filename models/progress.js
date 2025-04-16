const mongoose = require("mongoose");

const progressSchema = new mongoose.Schema({
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    daysSpent: {
        type: Number, // Tracks how many days the student has been working
        default: 0,
    },
    lastUpdated: {
        type: Date,
        default: Date.now,
    },
}, { _id: false });

module.exports = mongoose.model("Progress", progressSchema);
