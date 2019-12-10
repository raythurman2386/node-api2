// Imports
const express = require("express");
const cors = require("cors");
let db = require("../data/db");

// Routes
const testRouter = require("./routers/testRouter");
const postRouter = require("./routers/postRouter");

// Server setup
const server = express();

server.use(express.json());
server.use(cors());

server.use("/", testRouter);
server.use("/api/posts", postRouter);

module.exports = server;
