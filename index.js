const express = require("express");
const cors = require("cors");
const chefs = require("./data/chefs.json");
const cuisine = require("./data/cuisine.json");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.get("/chefs", (req, res) => {
  res.send(chefs);
});

app.get("/chefs/:id", (req, res) => {
  const chefId = req.params.id;
  const cuisines = cuisine.filter((item) => item.chef_id === Number(chefId));
  res.send(cuisines);
});

// not found route
app.use((req, res) => {
  res.status(404).send({
    message: "404 Not Found",
  });
});

// server error route
app.use((err, req, res) => {
  res.status(500).send({
    error: "Server Error",
    message: err.message,
  });
});

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
