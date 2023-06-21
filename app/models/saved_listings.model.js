module.exports = (sequelize, Sequelize) => {
    const saved_listings = sequelize.define("saved_listings", {
        id : {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        listing_id : {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        user_id : {
            type: Sequelize.STRING,
            allowNull: false
        },
        created_at : {
            type: 'TIMESTAMP',
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    }, {
      tableName: 'saved_listings',
      timestamps: false
    });
  
    return saved_listings;
  };