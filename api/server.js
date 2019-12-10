// Imports
const express = require("express");
const middleware = require("./middleware");
const routes = require("./routers/routes.index");
let db = require("../data/db");

// Server setup
const server = express();

server.use(express.json());
middleware(server);
routes(server);

module.exports = server;
