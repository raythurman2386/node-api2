const express = require("express");

const router = express.Router();

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
