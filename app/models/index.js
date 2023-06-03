const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
require('sequelize-values')(Sequelize);

const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,

    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Admin = require("./admin.model.js")(sequelize, Sequelize);
db.Listings = require("./listings.model.js")(sequelize, Sequelize);
module.exports = db;