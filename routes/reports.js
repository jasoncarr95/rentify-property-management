// FROM TEMPLATE USING ROUTES/POSTS.JS
const express = require("express");
const router = express.Router();

// These routes are coming from the exported module in this file
const tenantsController = require('../controllers/tenants');

const reportsController = require("../controllers/reports")

const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Reports Routes - simplified for now
router.get("/rentroll", ensureAuth, reportsController.getRentRoll)


router.get("/:id", ensureAuth, tenantsController.getTenant);


router.post("/createTenant", tenantsController.createTenant)

// My Routes
// router.get("/addTenant", ensureAuth, tenantsController.getForm)

// router.put("/likePost/:id", postsController.likePost);

// router.delete("/deletePost/:id", postsController.deletePost);

module.exports = router;
