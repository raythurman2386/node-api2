const express = require("express");

const router = express.Router();

// Test route
router.get("/", (req, res) => {
  res.send("<h2>Hello from the comment route</h2>");
});

// GET Comments
router.get("/:id/comments", (req, res) => {});

// POST Comment
router.post("/:id/comments", (req, res) => {});

module.exports = router;
