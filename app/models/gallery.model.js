module.exports = (sequelize, Sequelize) => {
    const gallery = sequelize.define("gallery", {
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
        image : {
            type: Sequelize.STRING, 
            allowNull: false
        },
        created_at : {
            type: 'TIMESTAMP',
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
        
    }, {
      tableName: 'gallery',
      timestamps: false
    });
  
    return gallery;
  };