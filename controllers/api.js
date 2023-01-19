const Tenant = require("../models/Tenant");

// @desc Get goals
// @route GET /api/goals
// @access Private

async function getTenants(req, res) {
  try {
    const tenants = await Tenant.find();
    // .sort({ createdAt: "desc" }).lean();
    // console.log(tenants)
    res.status(200).json(tenants);
    // res.render("allTenants.ejs", {
    //     tenants: tenants,
    // });
  } catch (err) {
    console.log(err);
  }

  // res.status(200).json({ message: "Get goals" });
}

module.exports = {
  getTenants,
};
