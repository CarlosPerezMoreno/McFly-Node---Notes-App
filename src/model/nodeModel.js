const notes = {
  1: {
    id: 1,
    title: "Test Note",
    body: "Type here whatever you want",
    created_at: Date.now(),
    created_by: "Admin",
    edit_history: [
      {
        edited_at: Date.now(),
        edited_by: "User",
      },
    ],
  },
};

module.exports = notes;
