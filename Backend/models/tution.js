// models/tution.js
const mongoose = require('mongoose');

const TuitionSchema = new mongoose.Schema({
  subject: { type: String, required: true },
  location: String,
  pincode :{required:true,type:String},
  schedule: String,
  description: String,
  postedAt: { type: Date, default: Date.now },
  subscribers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

module.exports = mongoose.model('Tuition', TuitionSchema);
