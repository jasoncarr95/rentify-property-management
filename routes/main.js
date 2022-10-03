const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const homeController = require("../controllers/home");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

// Mine
const tenantsController = require("../controllers/tenants");
const reportsController = require("../controllers/reports")

//Main Routes - simplified for now
router.get("/", homeController.getIndex);
router.get("/home", ensureAuth, tenantsController.getHome);
router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
router.get("/logout", authController.logout);
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);

// FEED REPLACEMENT
router.get("/allTenants", ensureAuth, tenantsController.getAllTenants);


router.get("/reports", ensureAuth, reportsController.getReports);

// My Routes
router.get("/addTenant", ensureAuth, tenantsController.getForm);
// router.get("/showTenants", ensureAuth, tenantsController.showTenants)

module.exports = router;
