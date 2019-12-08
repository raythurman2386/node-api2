// Imports
const express = require("express");
const cors = require("cors");
let db = require("./data/db");

// Routes
const testRouter = require("./routers/testRouter");
const postRouter = require("./routers/postRouter");

// Server setup
const server = express();
const host = "127.0.0.1";
const port = 5000;

server.use(express.json());
server.use(cors());

server.use("/", testRouter);
server.use("/api/posts", postRouter);

// Start the server
server.listen(port, host, () => {
  console.log(`*** Server running at http://${host}:${port} ***`);
});
