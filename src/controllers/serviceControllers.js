const Service = require("../models/service-Model");


const servicesDescription = "My approach to website design is to create a website that strengthens your company’s brand while ensuring ease of use and simplicity for your audience."

const services = async (req, res) => {
    const serviceCards = await Service.find({});
    res.render("services", { servicesDescription, serviceCards });
}

const registerService = async (req, res) => {
    try {
        const { name, desc } = req.body;
        const logoPath = "/img/icon.png";
        await Service.create({ name, desc, logoPath });

        res.redirect("/services");

    } catch (error) {
        res.status(500).json({ msg: "Internal Server Error" });
    }
}

const updatePage = async (req, res) => {
    const serviceId = req.params.id;
    const serviceCards = await Service.find({});
    const service = serviceCards.find(s => s.id == serviceId);

    if (!service) {
        res.sendStatus(404);
    }

    res.render("updateService", { service });
}

const updateService = async (req, res) => {
    const serviceId = req.params.id;
    const serviceCards = await Service.find({});
    const service = serviceCards.find(s => s.id == serviceId);

    if (!service) {
        res.sendStatus(404);
    }

    Object.assign(service, req.body);
    await Service.updateOne({ _id: serviceId }, { $set: service });
    res.redirect("/services");
}

const deleteService = async (req, res) => {
    try {
        await Service.deleteOne({ _id: req.params.id });
        res.redirect("/services");
    } catch (error) {
        res.status(500).json({ msg: "Internal Server Error" });
    }
}

module.exports = {
    services, registerService, deleteService, updatePage, updateService
}