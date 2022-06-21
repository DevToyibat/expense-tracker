// downloaded postman on my mac. And i created mongoDB account.
// connect our db file to the outside server

const mongoose = require("mongoose");

module.exports = () => {
  const connectionParams = { useNewUrlParser: true, useUnifiedTopology: true };

  // to connect our uri in the database
  try {
    // a file that we dont want revealed to the public so we want to hide it in ATLAS with the help of .env
    mongoose.connect(process.env.ATLAS_URI, connectionParams);
    console.log("connection successful");
  } catch (error) {
    // catches an error, displays "could not .." and exit once.
    console.log(error);
    console.log("could not connect to database");
    process.exit(1);
  }
};
