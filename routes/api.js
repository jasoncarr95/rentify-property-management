const express = require("express");
const router = express.Router();
const { getTenants } = require("../controllers/api");

router.route("/").get(getTenants);
// router.route("/:id").delete(deleteGoal).put(updateGoal);

module.exports = router;
