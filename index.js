const express = require("express");
const http = require("http");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const { swaggerUi, specs } = require("./swagger");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/post");
const userRoute = require("./routes/user");

const app = express();
const server = http.createServer(app);

dotenv.config();

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());

const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("message", (msg) => {
    io.emit("message", msg);
  });
});

app.use(
  "/api/docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true })
);
app.use("/api/auth", authRoute);
app.use("/api/post", postRoute);
app.use("/api/user", userRoute);

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("db is connected");
  })
  .catch((err) => console.log(err));

server.listen(process.env.PORT, () => {
  console.log("server is listening...");
});
