const express = require('express');
const Tuition = require('../models/tution');
const router = express.Router();

// POST tuition
router.post('/', async (req, res) => {
  try {
    const newTuition = new Tuition(req.body);
    const saved = await newTuition.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET all tuitions
router.get('/', async (req, res) => {
  try {
    const tuitions = await Tuition.find().sort({ postedAt: -1 });
    res.json(tuitions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
