require("dotenv").config();
const express = require("express");
const cors = require("cors");

// looking for file expenseDb and CategoryRoutes using variable connectDb and category
const connectDb = require("./db/expenseDb");
// import from route file from index.js
const category = require("./routes/categoryRoutes");
const transaction = require("./routes/transactionRoutes");
const label = require("./routes/labelRoutes");
connectDb();

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json("Welcome to my expense tracker");
});

// api/categories to be put in the postman using post localhost:5000/api/categories and send
// make sure the api path is in plural form
app.use("/api/categories", category);
app.use("/api/transactions", transaction);
app.use("/api/labels", label);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
