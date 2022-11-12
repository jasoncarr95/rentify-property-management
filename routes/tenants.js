const express = require("express");
const router = express.Router();
const { ensureAuth, ensureGuest } = require("../middleware/auth");

// These routes are coming from the exported module in this file
const tenantsController = require("../controllers/tenants");

router.get("/", ensureAuth, tenantsController.getAllTenants);

router.get("/:id", ensureAuth, tenantsController.getTenant);

router.post("/createTenant", ensureAuth, tenantsController.createTenant);

module.exports = router;
