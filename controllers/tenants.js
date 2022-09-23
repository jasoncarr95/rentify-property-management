const Tenant = require("../models/Tenant");

module.exports = {
    getForm: async (req, res) => {
        try {
            // const posts = await Post.find({ user: req.user.id });
            res.render("addTenant.ejs");
        } catch (err) {
            console.log(err);
        }
    },
    addTenant: async (req, res) => {
        try {
            // await Tenant.create({
            //     firstName: req.body.firstName,
            //     lastName: req.body.lastName,
            //     landlord: req.body.landlordControl,


            // })
            console.log(req.body.firstName)
            res.redirect("/profile")
        } catch (err) {
            console.log(err)
        }
    }
};
