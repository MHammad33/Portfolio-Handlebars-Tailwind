const express = require("express");
const router = express.Router();

const cards = [
    { imgId: "project-1" },
    { imgId: "project-2" },
    { imgId: "project-3" },
];

let projectDescription = "I help designers, small agencies and businesses bring their ideas to life. Powered by Figma, VS Code and coffee, I turn your requirements into a well-designed websites";

router.get("/", (req, res) => {
    res.render("works", {
        cards,
        projectDescription
    });
});

module.exports = router;