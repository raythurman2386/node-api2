// Routes
const testRouter = require("./testRouter");
const postRouter = require("./postRouter");

module.exports = server => {
  server.use("/", testRouter);
  server.use("/api/posts", postRouter);
};
