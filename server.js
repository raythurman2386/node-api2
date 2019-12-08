// Imports
const express = require("express");
const cors = require("cors");
let db = require("./data/db");

// Server setup
const server = express();
const host = "127.0.0.1";
const port = 5000;

server.use(express.json());
server.use(cors());

// Basic route to test server
server.get("/", (req, res) => {
  res.send("Hello from Express!");
});

// Start the server
server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`);
});
