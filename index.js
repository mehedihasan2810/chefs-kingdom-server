const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("hey foooo");
});

app.use((req, res) => {
  res.status(404).send({
    message: "404 Not Found",
  });
});

app.use((err, req, res) => {
  res.status(500).send({
    error: "Server Error",
    message: err.message,
  });
});

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
