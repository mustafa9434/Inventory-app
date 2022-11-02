const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
require("./config/db");
const appRoutes = require("./routes/index");

app.use(cors());
app.use(express.json());
app.use("/api", appRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
