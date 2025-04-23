const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  internship: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Internship',
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'accepted', 'rejected'],
    default: 'pending'
  },
  resumeUrl: {
    type: String,
    required: true
  },
  coverLetter: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Application', applicationSchema);
