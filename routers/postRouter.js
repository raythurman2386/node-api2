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

router.get("/:id", (req, res) => {
  db.findById(req.params.id)
    .then(post => {
      if (post.length === 0) {
        return res
          .status(404)
          .json({ message: "The post with the specified ID does not exist" });
      } else {
        res.status(200).json(post);
      }
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: "The post information could not be retrieved." });
    });
});

// POST Posts
router.post("/", (req, res) => {
  if (!req.body.title || !req.body.contents) {
    return res.status(400).json({
      errorMessage: "Please provide title and contents for the post."
    });
  }

  db.insert(req.body)
    .then(post => {
      db.findById(post.id).then(i => res.status(201).json(i));
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: "There was an error while saving the post." });
    });
});

// DELETE Posts
router.delete("/:id", (req, res) => {});

// PUT Posts
router.put("/:id", (req, res) => {});

module.exports = router;
