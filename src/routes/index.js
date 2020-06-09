const { Router } = require("express");
const router = Router();
const { notes } = require("../notes/index");

router.get("/notes", (req, res) => {
  res.json({
    notes,
  });
});

module.exports = router;
