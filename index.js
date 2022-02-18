const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const authRoute = require("./routes/auth");
const { swaggerUi, specs } = require("./swagger");
const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());

app.use(
  "/api/docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true })
);
app.use("/api/auth", authRoute);

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("db is connected");
  })
  .catch((err) => console.log(err));

app.listen(process.env.PORT, () => {
  console.log("server is listening...");
});
