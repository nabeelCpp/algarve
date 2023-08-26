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
db.Blogs = require("./blogs.model.js")(sequelize, Sequelize); 
db.Gallery = require("./gallery.model.js")(sequelize, Sequelize); 
db.City = require("./city.model.js")(sequelize, Sequelize); 
db.Category = require("./category.model.js")(sequelize, Sequelize); 
db.Features = require("./features.model.js")(sequelize, Sequelize); 
db.User = require("./users.model.js")(sequelize, Sequelize); 
db.SavedListing = require("./saved_listings.model.js")(sequelize, Sequelize); 
db.Booking = require("./booking.model.js")(sequelize, Sequelize); 
db.ContactQuery = require("./contactQuery.model.js")(sequelize, Sequelize); 
db.Subscribe = require("./subscribe.model.js")(sequelize, Sequelize); 
module.exports = db;