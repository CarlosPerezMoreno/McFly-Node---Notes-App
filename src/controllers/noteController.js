const _ = require("lodash");
const notes = require("../model/nodeModel");

exports.getNextId = () =>
  _.parseInt(_.maxBy(Object.keys(notes), _.parseInt)) + 1;

exports.addNote = ({ title, body, created_by }) => {
  const id = getNextId();
  notes[id] = {
    id,
    title,
    body,
    created_by,
    created_at: Date.now(),
    edit_history: [],
  };
  return notes[id];
};

exports.getNotes = () => notes;

exports.getNote = (id) => {
  const note = getNotes()[id];
  return note || null;
};

exports.favNote = (id, update) => {
  const note = getNote(id);
  _.assign(note, _.pick(update, ["title", "body"]));
  if (update.edited_by) {
    note.edit_history.push({
      edited_by: update.edited_by,
      edited_at: Date.now(),
    });
  }
  return note;
};

exports.favNotes = () => notes;
