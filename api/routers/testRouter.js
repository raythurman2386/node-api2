const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const shoutouts = await db("shoutouts");
    const messageOfTheDay = process.env.MOTD || "Hello World!"; // add this line
    res.status(200).json({ motd: messageOfTheDay, shoutouts }); // change this line
  } catch (error) {
    console.error("\nERROR", error);
    res.status(500).json({ error: "Cannot retrieve the shoutouts" });
  }
});

router.get("/api", (req, res) => {
  res.json({ message: "Welcome to your express router" });
});

module.exports = router;
