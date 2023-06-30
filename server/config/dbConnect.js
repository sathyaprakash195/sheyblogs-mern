const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.mongo_url);
    console.log("Mongo DB Connection Successfull");
  } catch (error) {
    console.log("Mongo DB Connection Failed");
    console.log(error);
  }
};

dbConnect();
