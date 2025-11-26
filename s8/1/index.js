"use strict";

const express = require("express");
const sequelize = require("./sequelize");

const app = express();

app.set("port", process.env.PORT || 7000);

app.listen(app.get("port"), async () => {
  console.log(`Server started on http://localhost:${app.get("port")}`);
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});
