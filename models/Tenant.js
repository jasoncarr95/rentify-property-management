const mongoose = require("mongoose");

const TenantSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  landlordControl: {
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
});

module.exports = mongoose.model("Tenant", TenantSchema);
