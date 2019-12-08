const express = require("express");
let db = require("../data/db");

const router = express.Router();
const commentRouter = require("./commentRouter");

router.use("/:id/comments", commentRouter);

// Test route
// router.get("/", (req, res) => {
//   res.send("<h2>Hello from the post route</h2>");
// });

// GET Posts
router.get("/", (req, res) => {
  db.find()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: "The posts information could not be retrieved" });
    });
});

router.get("/:id", (req, res) => {});

// POST Posts
router.post("/", (req, res) => {});

// DELETE Posts
router.delete("/:id", (req, res) => {});

// PUT Posts
router.put("/:id", (req, res) => {});

module.exports = router;
