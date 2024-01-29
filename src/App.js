const express = require("express");
const hbs = require("hbs");
const path = require("path");
const PORT = 8080;
const app = express();
const dbConnect = require("./utils/db");
const staticPath = path.join(__dirname, "../public");
const partialsPath = path.join(__dirname, "/views/partials");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set static path
app.use(express.static(staticPath));

// Set templating engine
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));
app.set("view options", { layout: "layouts/main" });

// Set path for partials for handlebars
hbs.registerPartials(partialsPath);

// Setting Routes
const aboutRoute = require("./routes/About");
const worksRoute = require("./routes/Works");
const contactRoute = require("./routes/Contact");
const servicesRoute = require("./routes/Services");
app.use("/about", aboutRoute);
app.use("/works", worksRoute);
app.use("/contact", contactRoute);
app.use("/services", servicesRoute);

dbConnect().then(() => {
    app.get("/", (req, res) => {
        res.render("index");
    });
});

app.listen(PORT, () => console.log("Server running on port " + PORT));
