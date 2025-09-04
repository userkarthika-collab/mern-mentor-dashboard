const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  title: String,
  category: String,
  progress: Number,
  deadline: Date,
  mentor: { type: mongoose.Schema.Types.ObjectId, ref: 'Mentor' },
  detailSteps: [String],
});

module.exports = mongoose.model('Task', TaskSchema);