// we imported categories from schema.js
// you dont need to touch the schema after first definition.
// in your controller, you only change the create categories like the type and color.
// go to postman app, post and send
// go to mongodb app and refresh

const { Categories } = require("../models/schema");

// creating a function in ES6
// you request for a api from outside server and get a response using asynchronous
// function to reequest and save the requested api

const createCategories = async (req, res) => {
  const Create = Categories({
    type: "Savings",
    color: "#646FD4",
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
