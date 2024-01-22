const express = require("express");
const router = express.Router();

const servicesDescription = "My approach to website design is to create a website that strengthens your company’s brand while ensuring ease of use and simplicity for your audience."

const serviceCards = [
    {
        name: "React development", logoPath: "/img/icon.png", desc: "I specialize in creating interactive websites for individuals and small businesses."
    },
    {
        name: "Web development", logoPath: "/img/icon.png", desc: "I specialize in creating interactive websites for individuals and small businesses."
    },
    {
        name: "React development", logoPath: "/img/icon.png", desc: "I specialize in creating interactive websites for individuals and small businesses."
    },
];

router.get("/", (req, res) => {
    res.render("services", { servicesDescription, serviceCards });
});

module.exports = router;