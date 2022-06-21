// how to import mongoose
// schema should not be touched after you'vee defined the first schema

const mongoose = require("mongoose");

// the category select input schema has fields that takes the type and color and create a new schema

const categorySchema = new mongoose.Schema(
  {
    // local field
    type: { type: String, default: "Expense" },
    color: { type: String, default: "#FF7396" },
  },
  {
    timestamps: true,
  }
);

// the transaction schema has fields that takes name type amount date

const transactionSchema = new mongoose.Schema(
  {
    // foreign field
    name: { type: String },
    type: { type: String, default: "Expense" },
    amount: { type: Number },
    date: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

// model makes our schema skeleton to a data.

const Categories = mongoose.model("categories", categorySchema);
const Transaction = mongoose.model("transaction", transactionSchema);

// the main schema that should be default
exports.default = Transaction;

// how to export in node.js or backend
module.exports = { Categories, Transaction };
