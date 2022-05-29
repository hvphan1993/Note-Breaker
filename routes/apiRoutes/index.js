const router = require("express").Router();
const { createNote, updateDb } = require("../../lib/notes");
const { notes } = require("../../db/db.json");
const { v4: uuidv4 } = require("uuid");

// show notes in json data
router.get("/notes", (req, res) => {
  let results = notes;
  res.json(results);
});

router.post("/notes", (req, res) => {
  req.body.id = uuidv4();
  const newNote = createNote(req.body, notes);
  res.json(newNote);
});

router.delete("/notes/:id", (req, res) => {
  const params = req.params.id;
  updateDb(params, notes);
  res.redirect("");
});

module.exports = router;
