const express = require("express");
const router = express.Router();

const contactDesc = "Do you have an idea? Let's discuss it and see what we can do together.";

const contactInputs = [
    { type: "text", placeholder: "Name Surname" },
    { type: "email", placeholder: "Email" },
];

router.get("/", (req, res) => {
    res.render("contact", { contactDesc, contactInputs });
});

module.exports = router;