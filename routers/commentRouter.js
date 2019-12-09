const express = require("express");
let db = require("../data/db");

const router = express.Router({
  mergeParams: true
});

// Test route
// router.get("/", (req, res) => {
//   res.send("<h2>Hello from the comment route</h2>");
// });

// GET Comments
router.get("/", (req, res) => {
  db.findPostComments(req.params.id)
    .then(comments => {
      if (comments.length === 0) {
        return res
          .status(404)
          .json({ message: "The post with the specified ID Does not exist" });
      }

      res.status(200).json(comments);
    })
    .catch(err => {
      res
        .status(500)
        .json({ errorMessage: "The comments info could not be retrieved" });
    });
});

// POST Comment
router.post("/", (req, res) => {
  const comment = {
    post_id: req.params.id,
    text: req.body.text
  };

  if (!req.body.text) {
    return res
      .status(400)
      .json({ errorMessage: "Please provide text for the comment." });
  }

  db.insertComment(comment)
    .then(postComment => {
      db.findCommentById(postComment.id)
        .then(comment => {
          res.status(201).json(comment);
        })
        .catch(err => {
          res
            .status(404)
            .json({
              errorMessage:
                "There was an error while saving the comment to the database"
            });
        });
    })
    .catch(err => {
      res.status(500).json({
        errorMessage:
          "There was an error while saving the comment to the database"
      });
    });
});

module.exports = router;
