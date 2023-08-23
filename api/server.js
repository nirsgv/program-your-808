const path = require("path");
const { NODE_ENV } = process.env;
if (NODE_ENV !== "production") {
  require("dotenv").config({
    path: path.resolve(__dirname + "/../variables.env"),
  });
}
const tracksController = require("./controllers/tracksController");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const compression = require("compression");
const morgan = require("morgan");

const app = express();
app.disable("x-powered-by");
app.use(compression());
app.use(morgan("common"));
app.use(morgan("dev"));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const normalizePort = (port) => parseInt(port, 10);
const PORT = normalizePort(process.env.PORT || 8000);
const DATABASE = process.env.DATABASE;

mongoose.connect(DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () =>
  console.log(
    "Connection with MongoDB was successful",
    "Database connection string:",
    DATABASE
  )
);

mongoose.connection.on("error", (err) => {
  console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`);
});

console.log({ "process.env.NODE_ENV": DATABASE, PORT });
console.log({ "process.env": process.env });

app.get("/api/tracks", tracksController.getTracks);
app.get("/api/track/:id", tracksController.getTrack);
app.get("/api/test", tracksController.test);

if (NODE_ENV === "production") {
  app.use(express.static(`${__dirname}/public/`));
  app.get("*", (_req, res) => res.sendFile(path.resolve(__dirname + "/../public/index.html")));
}

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log("server started");
});
