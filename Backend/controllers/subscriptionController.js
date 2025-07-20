const Subscription = require('../models/subscription');
const Tuition = require('../models/tution');

exports.subscription = async (req, res) => {
  const { tutorId, tuitionId } = req.body;

  try {
    const alreadySubscribed = await Subscription.findOne({ tutorId, tuitionId });
    if (alreadySubscribed) {
      return res.status(400).json({ message: 'Already subscribed' });
    }

    const subscription = new Subscription({ tutorId, tuitionId });
    await subscription.save();
    res.status(201).json(subscription);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

exports.getAllSubscriptions =  async (req, res) => {
  try {
    const subscriptions = await Subscription.find({ tutorId: req.params.tutorId })
      .populate('tuitionId');
    res.json(subscriptions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};