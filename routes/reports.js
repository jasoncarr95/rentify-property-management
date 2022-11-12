const express = require("express");
const router = express.Router();
const { ensureAuth, ensureGuest } = require("../middleware/auth");

// These routes are coming from the exported module in this file
const reportsController = require("../controllers/reports");

//Reports Routes - simplified for now
router.get("/rentroll", ensureAuth, reportsController.getRentRoll);

//
const tenantsController = require("../controllers/tenants");
router.get("/:id", ensureAuth, tenantsController.getTenant);

module.exports = router;
