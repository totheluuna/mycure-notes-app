const Note = require('../models/Note');

class NoteRepository {

  constructor(model) {
    this.model = model;
  }

  // create a new note
  create(title, content) {
    const newNote = { title, content, done: false };
    const note = new this.model(newNote);

    return note.save();
  }

  // return all notes

  findAll() {
    return this.model.find();
  }

  // find note by the id
  findById(id) {
    return this.model.findById(id);
  }

  // delete note
  deleteById(id) {
    return this.model.findByIdAndDelete(id);
  }

  //update note
  updateById(id, object) {
    const query = { _id: id };
    return this.model.findOneAndUpdate(query, { $set: { title: object.title, content: object.content, done: object.done } });
  }
}

module.exports = new NoteRepository(Note);