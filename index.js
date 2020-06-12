const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;

app.use(express.static("dist"));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.resolve("./dist/index.html"));
});

app.get("/recipes", (req, res) => {
  res.sendFile(path.resolve("./recipes.json"));
});

app.listen(port, function () {
  console.log(`Server is running on ${port}!`);
});
