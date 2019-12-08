const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("<h2>Welcome to your express router</h2>");
});

router.get("/api", (req, res) => {
  res.json({ message: "Welcome to your express router" });
});

module.exports = router;
