const express = require("express");
const _ = require("lodash");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "DepGuard test application",
    status: "running"
  });
});

app.get("/users", (req, res) => {
  const users = ["Arpit", "Rahul", "Aman"];

  res.json({
    users: _.map(users, (name) => ({ name }))
  });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
