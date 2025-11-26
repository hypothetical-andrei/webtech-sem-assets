const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./sqlite/test.db",
});

sequelize
  .sync({
    force: true,
  })
  .then(() => {
    console.log("All models were synchronized successfully.");
  });

module.exports = sequelize;
