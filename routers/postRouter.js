const express = require("express");

const router = express.Router();
const commentRouter = require("./commentRouter");

router.use("/:id/comments", commentRouter);

// Test route
router.get("/", (req, res) => {
  res.send("<h2>Hello from the post route</h2>");
});

// GET Posts
router.get("/", (req, res) => {});

router.get("/:id", (req, res) => {});

// POST Posts
router.post("/", (req, res) => {});

// DELETE Posts
router.delete("/:id", (req, res) => {});

// PUT Posts
router.put("/:id", (req, res) => {});

module.exports = router;
