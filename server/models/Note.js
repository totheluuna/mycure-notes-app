const mongoose = require('mongoose');

const { Schema } = mongoose;

// Define schema for todo items
const noteSchema = new Schema({
  title: {
    type: String,
  },
  content: {
      type: String,
  },
  done: {
    type: Boolean,
  },
});

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;
