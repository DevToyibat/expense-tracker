// one
const express = require("express");

// two
const router = express.Router();

// you import your route controller file to the route file
const {
  createTransaction,
  getTransaction,
  deleteTransaction,
} = require("../controller/transactionController");

// when posting and getting, you dont need id
router.route("/").post(createTransaction).get(getTransaction);

// when updating and deleting, you use id
router.route("/:id").delete(deleteTransaction);

// three
module.exports = router;
