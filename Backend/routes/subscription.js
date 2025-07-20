const express = require('express');
const router = express.Router();

const { subscription, getAllSubscriptions } = require('../controllers/subscriptionController');

// Subscribe to a tuition
router.post('/', subscription);

// Get all subscriptions for a tutor
router.get('/:tutorId',getAllSubscriptions);

module.exports = router;
