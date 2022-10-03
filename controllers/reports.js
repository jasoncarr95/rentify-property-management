const Tenant = require("../models/Tenant");

module.exports = {
    getReports: async (req, res) => {
        try {
            const tenants = await Tenant.find()
                .sort({ createdAt: "desc" })
                .lean();
            // console.log(tenants);
            const tableHeaders = Object.keys(tenants[0]).slice(1, -2);
            // console.log(tableHeaders)
            // console.log(tenants)
            res.render("reports.ejs", {
                tenants: tenants,
                tableHeaders: tableHeaders,
            });
        } catch (err) {
            console.log(err);
        }
    },
    getRentRoll: async (req, res) => {
        try {
            const tenants = await Tenant.find()
                .sort({ createdAt: "desc" })
                .lean();
            // console.log(tenants);

            // console.log(tenant);
            const tableHeaders = [""];
            res.render("reports.ejs", {
                tenants: tenants,
                tableHeaders: tableHeaders,
            });
        } catch (err) {
            console.log(err);
        }
    },
};
