require("dotenv").config();

const server = require("./api/server");

const port = process.env.PORT || 4000;

// Start the server
server.listen(port, () => {
  console.log(`*** Server running at PORT:${port} ***`);
});
