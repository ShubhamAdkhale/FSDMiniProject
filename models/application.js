const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
  {
    internship: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Internship",
      required: true,
    },
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // assuming students are stored in the User model
      required: true,
    },
    resume: {
      type: String, // URL or filename of uploaded resume
      required: true,
    },
    status: {
      type: String,
      enum: ["Pending", "Accepted", "Rejected"],
      default: "Pending",
    },
    progress: {
      type: Number,
      default: 0, // represents percentage (0 to 100)
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Application", applicationSchema);
