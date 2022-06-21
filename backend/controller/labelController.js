// label helps manipulate the color and type underneath the chart
// import transcation from schema to label
// THE FINAL PART TO CREATE IS THE LABEL
// in the label controller, you used schema in iside label controlleer then to route, to index.js
const { Transaction } = require("../models/schema");

// creating an aync function to get data
const getLabels = async (req, res) => {
  // to combine from multiple things to one
  await Transaction.aggregate([
    {
      // lookup pick the type from categories in schema, combine them and name it as one
      $lookup: {
        from: "categories",
        localField: "type",
        foreignField: "type",
        as: "categoriesInfo",
      },
    },
    {
      // unwind help to use it after you have lookup
      $unwind: "$categoriesInfo",
    },
  ])
    .then((result) => {
      const data = result.map((v) =>
        Object.assign(
          {},
          {
            _id: v._id,
            name: v.name,
            type: v.type,
            color: v.categoriesInfo.color,
            amount: v.amount,
          }
        )
      );
      res.json(data);
    })
    .catch((err) => {
      res.status(400).json("lookup collection error");
    });
};

module.exports = getLabels;
