const express = require("express");
const router = express.Router();
const hbs = require("hbs");

const skills = [
    { skill: "HTML", proficiency: "3/4" },
    { skill: "JavaScript", proficiency: "4/5" },
    { skill: "React", proficiency: "5/6" },
];

let aboutDescription = "I design and build digital products. I'm also a multi-disciplinary maker with over 10 years of experiences in wide range of design disciplines.";


router.get("/", (req, res) => {
    res.render("about", {
        aboutDescription, skills
    });
});

module.exports = router;