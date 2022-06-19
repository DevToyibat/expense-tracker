// wee imported categories from schema.js

const { Categories } = require("../models/schema");

// creating a function in ES6
// you request for a api from outside server and get a response using asynchronous
// function to reequest and save the requested api

const createCategories = async (req, res) => {
  const Create = Categories({
    type: "Expense",
    color: "#FF7396",
  });

  // it should save if found, if not display an error message just likee 404

  try {
    await Create.save();
    res.status(201).json(Create);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// function to get requested api

const getCategories = async (req, res) => {
  // once you find the item in ategories, store in the variable 'data'

  try {
    const data = await Categories.find({});

    // just filter out the type and color not all

    const filter = await data.map((v) =>
      Object.assign({}, { type: v.type, color: v.color })
    );
    return res.json(filter);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

module.exports = { createCategories, getCategories };
