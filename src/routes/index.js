const express = require("express");
const { Router } = require("express");
const router = Router();
const _ = require("lodash");

const app = express();

const {
  getNextId,
  addNote,
  getNotes,
  getNote,
  favNotes,
  favNote,
} = require("../controllers/noteController");

app.post("/notes", (req, res) => {
  const note = addNote(req.body);
  res.json(note);
});

router.get("/notes", (req, res) => {
  res.json(_.map(getNotes()));
});

router.get("/notes/:id", (req, res) => {
  const note = getNote(req.params.id);
  res.json(note);
});

router.get("/notes/:id", (req, res) => {
  const note = favNotes(req.params.id, req.body);
  res.json(note);
});

router.put("/notes/:id", (req, res) => {
  const result = favNote(req.params.id);
  res.json(result);
});

module.exports = router;
