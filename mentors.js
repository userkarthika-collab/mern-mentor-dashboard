const express = require('express');
const Mentor = require('../models/Mentor');

const router = express.Router();

// Get all mentors
router.get('/', async (req, res) => {
  try {
    const mentors = await Mentor.find();
    res.json(mentors);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;