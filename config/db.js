const mongoose = require("mongoose");
require("dotenv").config();
mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Databse connected"))
  .catch((error) => console.log(error));
