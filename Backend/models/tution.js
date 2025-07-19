const mongoose = require('mongoose');

const TuitionSchema = new mongoose.Schema({
  subject: { type: String, required: true },
  location: String,
  schedule: String,
  description: String,
  postedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Tuition', TuitionSchema);
