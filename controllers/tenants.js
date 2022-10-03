const Tenant = require("../models/Tenant");

module.exports = {
    getHome: async (req, res) => {
        try {
            //   const tenants = await tenant.find({ user: req.user.id });
            res.render("home.ejs", { user: req.user });
        } catch (err) {
            console.log(err);
        }
    },
    getForm: async (req, res) => {
        try {
            // const tenants = await tenant.find({ user: req.user.id });
            res.render("addTenant.ejs");
        } catch (err) {
            console.log(err);
        }
    },
    getAllTenants: async (req, res) => {
        try {
            const tenants = await Tenant.find()
                .sort({ createdAt: "desc" })
                .lean();
                // console.log(tenants)
            res.render("allTenants.ejs", {
                tenants: tenants,
            });
        } catch (err) {
            console.log(err);
        }
    },
    getTenant: async (req, res) => {
        try {
            const tenant = await Tenant.findById(req.params.id).lean();
            console.log(req.params);
            // console.log(tenant);
            res.render("tenant.ejs", { tenant: tenant });
        } catch (err) {
            console.log(err);
        }
    },
    createTenant: async (req, res) => {
        try {
            console.log(req.body.renewalRent);
            await Tenant.create({
                "Lease Date": req.body.leaseDate,
                "Quickbooks Status": req.body.quickbooksStatus,
                "Building Control": req.body.buildingControl,
                "Street Control": req.body.streetControl,
                "Apartment Number": req.body.apartmentNumber,
                "Landlord Control": req.body.landlordControl,
                "First Name": req.body.firstName,
                "Last Name": req.body.lastName,
                "getsHUD": req.body.hud ? true : false,
                "dss_catholicCharity": req.body.dss_catholicCharity
                    ? true
                    : false,
                "MonthToMonth": req.body.monthToMonth ? true : false,
                "specialAddress": req.body.specialAddress ? true : false,
                "securityDeposit": req.body.securityDeposit,
                "hasPets": req.body.hasPets ? true : false,
                "petFee": req.body.petFee,
                "originalRent": req.body.originalRent,
                "leaseStart": req.body.leaseStart,
                "leaseEnd": req.body.leaseEnd,
                "tenantStatus": req.body.tenantStatus,
                "tenantStatusDate": req.body.tenantStatusDate,
                "tenantTenureDate": req.body.tenantTenureDate,
                "currentRent": req.body.currentRent,
                "rentIncrease": req.body.rentIncrease,
                "leaseTerm": req.body.leaseTerm,
                "renewalRent": req.body.renewalRent,
                "utilitiesPaid_landLord": req.body.utilitiesPaid_landLord,
                "utilitiesPaid_tenant": req.body.utilitiesPaid_tenant,
                "numOfBedrooms": req.body.numOfBedrooms,
                "apartmentFloor": req.body.apartmentFloor,
                "laundry": req.body.laundry ? true : false,
                "CO_detector": req.body.CO_detector ? true : false,
                "airConditioning": req.body.airConditioning ? true : false,
                "dehumidifier": req.body.dehumidifier ? true : false,
                "extras": req.body.extras,
                "carportOrGarage_CheckBox": req.body.carportOrGarage_CheckBox
                    ? true
                    : false,
                "carportRent": req.body.carportRent,
                "homePhone": req.body.homePhone,
                "mobilePhone": req.body.mobilePhone,
                "employer": req.body.employer,
                "employerPhone": req.body.employerPhone,
                "email": req.body.email,
                "dependents": req.body.dependents,
                "emergencyContact": req.body.emergencyContact,
                "vehicleInfo": req.body.vehicleInfo,
                "license": req.body.license,
                "dateOfBirth": req.body.dateOfBirth,
            });
            res.redirect("/addTenant");
        } catch (err) {
            console.log(err);
        }
    },
    getReports: async (req, res) => {
        try {
            const tenants = await Tenant.find()
                .sort({ createdAt: "desc" })
                .lean();
            // console.log(tenants);

            // console.log(tenant);
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
};
