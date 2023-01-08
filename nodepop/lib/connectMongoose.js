"use strict";

const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose.connection.on("error", (err) => {
  console.log("Failed to connect to MongoDB", err);
  process.exit(1);
});

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB on", mongoose.connection.name);
});

mongoose.connect("mongodb://127.0.0.1:27017/ads");

module.exports = mongoose.connection;
