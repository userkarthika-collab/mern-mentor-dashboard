const express = require('express');
const Task = require('../models/Task');

const router = express.Router();

// Get all tasks
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find().populate('mentor');
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update task progress
router.post('/update', async (req, res) => {
  const { taskId, progress } = req.body;
  try {
    const task = await Task.findById(taskId);
    if (task) {
      task.progress = progress;
      await task.save();
      res.json({ message: 'Task updated successfully', task });
    } else {
      res.status(404).json({ message: 'Task not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;