// FROM TEMPLATE USING ROUTES/POSTS.JS
const express = require("express");
const router = express.Router();

// These routes are coming from the exported module in this file
const apiController = require('../controllers/api');

const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now


router.get("/allTenants", ensureAuth, apiController.getAllTenants)



// My Routes
// router.get("/addTenant", ensureAuth, tenantsController.getForm)

// router.put("/likePost/:id", postsController.likePost);

// router.delete("/deletePost/:id", postsController.deletePost);

module.exports = router;
