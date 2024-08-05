const express = require("express");
const cors = require("cors");
const middleware = require("./middleware");

const app = express();

// Middlewares
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
})


// Error Handling middleware
app.use(middleware.notFound);
app.use(middleware.errorHandler);

module.exports = app;