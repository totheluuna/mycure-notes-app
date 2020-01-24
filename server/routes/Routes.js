const express = require('express');

const app = express.Router();
const repository = require('../repositories/NoteRepository');

// get all note items in the db
app.get('/', (req, res) => {
  repository.findAll().then((notes) => {
    res.json(notes);
  }).catch((error) => console.log(error));
});

// add a note item
app.post('/', (req, res) => {
  const { title, content } = req.body;
  repository.create(title, content).then((note) => {
    res.json(note);
  }).catch((error) => console.log(error));
});

// delete a note item
app.delete('/:id', (req, res) => {
  const { id } = req.params;
  repository.deleteById(id).then((ok) => {
    console.log(ok);
    console.log(`Deleted record with id: ${id}`);
    res.status(200).json([]);
  }).catch((error) => console.log(error));
});

// update a note item
app.put('/:id', (req, res) => {
  const { id } = req.params;
  const note = { title: req.body.title, content: req.body.content , done: req.body.done };
  repository.updateById(id, note)
    .then(res.status(200).json([]))
    .catch((error) => console.log(error));
});
module.exports = app;