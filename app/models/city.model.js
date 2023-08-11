module.exports = (sequelize, Sequelize) => {
    const city = sequelize.define("city", {
        id : {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        city : {
            type: Sequelize.STRING, 
            allowNull: false
        },
        lat : {
            type: Sequelize.STRING, 
            allowNull: false
        },
        lon : {
            type: Sequelize.STRING, 
            allowNull: false
        },
        country : {
            type: Sequelize.STRING, 
            allowNull: false
        },
        iso2 : {
            type: Sequelize.STRING, 
            allowNull: true
        }
        
    }, {
      tableName: 'city',
      timestamps: false
    });
  
    return city;
  };