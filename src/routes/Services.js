const express = require("express");
const router = express.Router();
const serviceControllers = require("../controllers/serviceControllers");

router.get("/", serviceControllers.services);
router.get("/registerService", (req, res) => {
    res.render("createService");
});
router.get("/updateService/:id", serviceControllers.updatePage);
router.post("/api/service/create", serviceControllers.registerService);
router.put("/api/service/update/:id", serviceControllers.updateService);
router.delete("/api/service/delete/:id", serviceControllers.deleteService);


module.exports = router;