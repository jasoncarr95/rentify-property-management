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
            const tableHeaders = [
                "Lease Date",
                "Building Control",
                "Street Control",
                "Full Name",
                "FullName 2",
                "Lease Begins",
                "Lease Ends",
                "Bdrm",
                "Tenant Status",
                "Tenant Status (Date)",
                "Tenure (Date)",
                "Renewal Rent",
                "Carport/Garage Rent",
                "Monthly Pet Fee",
            ];
            res.render("reports.ejs", {
                tenants: tenants,
                tableHeaders: tableHeaders,
            });
        } catch (err) {
            console.log(err);
        }
    },
};
