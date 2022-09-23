const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const homeController = require("../controllers/home");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

// Mine
const tenantsController = require("../controllers/tenants")

//Main Routes - simplified for now
router.get("/", homeController.getIndex);
router.get("/home", ensureAuth, tenantsController.getHome);
router.get("/reports", ensureAuth, tenantsController.getReports);
router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
router.get("/logout", authController.logout);
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);

// My Routes
router.get("/addTenant", ensureAuth, tenantsController.getForm)

module.exports = router;
