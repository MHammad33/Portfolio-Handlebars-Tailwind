const express = require("express");
const router = express.Router();

const servicesDescription = "My approach to website design is to create a website that strengthens your company’s brand while ensuring ease of use and simplicity for your audience."

const serviceCards = [
    {
        id: 1,
        name: "React development", logoPath: "/img/icon.png", desc: "I specialize in creating interactive websites for individuals and small businesses."
    },
    {
        id: 2,
        name: "Web development", logoPath: "/img/icon.png", desc: "I specialize in creating interactive websites for individuals and small businesses."
    },
    {
        id: 3,
        name: "React development", logoPath: "/img/icon.png", desc: "I specialize in creating interactive websites for individuals and small businesses."
    },
];

router.get("/", (req, res) => {
    res.render("services", { servicesDescription, serviceCards });
});

router.put("/api/servicesData/:id", (req, res) => {
    const serviceId = parseInt(req.params.id);
    const service = serviceCards.find(s => s.id === serviceId);

    if (!service) {
        res.sendStatus(404);
    }

    const payload = req.body;
    Object.assign(service, payload);

    res.json({ updateSuccess: serviceId });
});

module.exports = router;