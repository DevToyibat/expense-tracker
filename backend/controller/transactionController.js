const { Transaction } = require("../models/schema");

const createTransaction = async (req, res) => {
  if (!req.body)
    return res.status(400).json({ message: "http post data not found" });
  // you destruction the name type amount from js term body
  const { name, type, amount } = req.body;

  const newTransaction = Transaction({
    name,
    type,
    amount,
    date: new Date(),
  });
  try {
    await newTransaction.save();
    res.status(201).json(newTransaction);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const getTransaction = async (req, res) => {
  try {
    const data = await Transaction.find({});
    // reeturns everything i.e the entire name, type and amount and not filter .
    return res.json(data);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// delete method in mongoDb only needs clone and catch not try and catch
const deleteTransaction = async (req, res) => {
  if (!req.body) return res.status(400).json({ message: "request not found" });

  await Transaction.deleteOne(req.body, (error) => {
    if (!error) res.json("record deleted successfully");
  })
    .clone()
    .catch((error) => {
      res.json(`Error while deleting transaction ${error.message}`);
    });
};

module.exports = { createTransaction, getTransaction, deleteTransaction };
