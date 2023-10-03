const express = require("express");

const server = express();

server.all("/", (req, res) => {
  res.send("Bot is running!");
});

function keepAlive() {
  server.listen(8080, () => {
    return console.log("server running");
  });
}
module.exports = keepAlive;
