const mongoose = require('mongoose');

const MentorSchema = new mongoose.Schema({
  name: String,
  specialization: String,
  tasksCompleted: Number,
  rating: Number,
  reviews: Number,
  profilePicture: String,
  bio: String,
});

module.exports = mongoose.model('Mentor', MentorSchema);