const mongoose = require("mongoose");

const TenantSchema = new mongoose.Schema(
    {
        "First Name": {
            type: String,
            required: true,
        },
        "Last Name": {
            type: String,
            require: true,
        },
        "Landlord Control": {
            type: String,
            required: true,
        },
        // streetControl: {
        //   type: String,
        //   required: true,
        // },
        // aptNumber: {
        //   type: Number,
        //   required: true,
        // },
        // quickbooksStatus: {
        //   type: String,
        //   required: true,
        // },

        // user: {
        //   type: mongoose.Schema.Types.ObjectId,
        //   ref: "User",
        // },
        createdAt: {
            type: Date,
            default: Date.now,
        },
    },
    { strict: false }
);

module.exports = mongoose.model("Tenant", TenantSchema);
