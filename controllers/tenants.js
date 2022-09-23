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
    getFeed: async (req, res) => {
        try {
          const tenants = await Tenant.find().sort({ createdAt: "desc" }).lean();
          res.render("feed.ejs", { tenants: tenants });
        } catch (err) {
          console.log(err);
        }
      },
    getPost: async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      const comments = await Comment.find({post: req.params.id}).sort({createdAt: "desc"}).lean();
      res.render("post.ejs", { post: post, user: req.user,comments });
    } catch (err) {
      console.log(err);
    }
  },
    addTenant: async (req, res) => {
        try {
            console.log(req.body)
            await Tenant.create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                landlordControl: req.body.landlordControl,
            })
            res.redirect("/addTenant")
        } catch (err) {
            console.log(err)
        }
    }
};
