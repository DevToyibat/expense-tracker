// to routee in backend, you need express to be imported
// from schema to controller to route to index.js

// one
const express = require("express");
// imported createcategories
const {
  createCategories,
  getCategories,
} = require("../controller/categoryController");

// two
const router = express.Router();
// import createcategories
// api/categories to be put in the postman using post localhost:5000/api/categories and send
// go to mongoDb and refresh. It shows a you have a database in the backend
// any submit form is created. You post what is created data, you get what has been posted and delete was has been posted
router.route("/").post(createCategories).get(getCategories);

// three
module.exports = router;
