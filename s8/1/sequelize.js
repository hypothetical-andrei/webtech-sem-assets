const { Sequelize } = require("sequelize")

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./sqlite/test.db",
})

module.exports = sequelize
