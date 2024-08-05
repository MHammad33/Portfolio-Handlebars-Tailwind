const express = require("express");
const cors = require("cors");
const middleware = require("./middleware");
const sectionRouter = require("./routes/section.route");

const app = express();

// Middlewares
app.use(cors());

// Routes
app.get("/", (req, res) => {
  res.send("Hello World!");
})

app.use("/api/v1/sections", sectionRouter);


// Error Handling middleware
app.use(middleware.notFound);
app.use(middleware.errorHandler);

module.exports = app;