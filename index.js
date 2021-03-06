const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const routesUrls = require("./route/route");
const cors = require("cors");
dotenv.config();

mongoose.connect(process.env.DATABASE_ACCESS, () =>
  console.log("db is connected")
);
app.get("/", function (req, res) {
  res.send("hello world");
});

app.use(express.json());
app.use(cors());

app.use(routesUrls);
app.listen(4000, () => console.log("server is running"));
