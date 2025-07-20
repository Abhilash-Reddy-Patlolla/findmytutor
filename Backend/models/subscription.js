const mongoose = require('mongoose');

const subscriptionSchema = new mongoose.Schema({
  tutorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  tuitionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Tuition', required: true },
  subscribedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Subscription', subscriptionSchema);
