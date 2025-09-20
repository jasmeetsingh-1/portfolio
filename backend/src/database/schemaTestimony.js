const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid'); // install with: npm install uuid

const testimonialSchema = new mongoose.Schema({
  uid: {
    type: String,
    default: uuidv4,   // generates a unique UUID v4
    unique: true,      // ensures uniqueness at DB level
    index: true        // makes queries on uid faster
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  isAllowed: {
    type: Boolean,
    default: false
  },
  occupation: {
    type: String,
    trim: true
  },
  company: {
    type: String,
    trim: true
  },
  workRelationship: {
    type: String,
    trim: true
  },
  projectLocation: {
    type: String,
    trim: true
  },
  testimonial: {
    type: String,
    required: false,
    trim: true
  },
  email: {
    type: String,
    required: false,
    lowercase: true,
    trim: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Testimonial', testimonialSchema);