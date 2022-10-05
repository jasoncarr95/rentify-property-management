const Tenant = require("../models/Tenant");

module.exports = {
    getReports: async (req, res) => {
        try {
            const tableHeading = "Reports";

            const tenants = await Tenant.find()
                .sort({ createdAt: "desc" })
                .lean();
            // console.log(tenants);
            const tableHeaders = Object.keys(tenants[0]).slice(1, -2);
            // console.log(tableHeaders)
            // console.log(tenants)
            // console.log(tableHeading)
            res.render("reports.ejs", {
                tenants: tenants,
                tableHeaders: tableHeaders,
                tableHeading: tableHeading,
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
            // console.log(tenants[0].toObject({ virtuals: true }));

            const tableHeading = "Rent Roll";
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
            res.render("reports/rentroll.ejs", {
                tenants: tenants,
                tableHeaders: tableHeaders,
                tableHeading: tableHeading,
            });
        } catch (err) {
            console.log(err);
        }
    },
};
