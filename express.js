const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const register = require("./router/user.route");
const updates = require("./router/list.route");
const comments = require("./router/comment.route");
const expressWs = require("express-ws");
const app = express();

app.use(bodyParser.json());

const wsInstance = expressWs(app);

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

app.use("/first", register);
app.use("/updates", updates);
app.use("/comments", comments);

app.ws("/comments", (ws, req) => {
  ws.on("message", function incoming(message) {
    console.log(message);
    ws.broadcast(message);
  });

  ws.broadcast = function broadcast(data) {
    wsInstance.getWss().clients.forEach(function each(client) {
      client.send(data);
    });
  };
});
module.exports = app;
