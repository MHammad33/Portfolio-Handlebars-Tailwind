const express = require("express");
const hbs = require("hbs");
const path = require("path");
const PORT = 8080;
const app = express();
const staticPath = path.join(__dirname, "public");

// Set static path
app.use(express.static(staticPath));

// Set templating engine
app.set("view engine", "hbs");
app.set("views", __dirname + "/src/views");

app.get("/", (req, res) => {
    res.render("demo");
});

app.listen(PORT, () => console.log("Server running on port " + PORT));
