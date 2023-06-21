module.exports = (sequelize, Sequelize) => {
    const user = sequelize.define("users", {
        id : {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        name : {
            type: Sequelize.STRING,
            allowNull: false
        },
        email : {
            type: Sequelize.STRING,
            allowNull: false
        },
        password : {
            type: Sequelize.STRING,
            allowNull: false
        },
        image : {
            type: Sequelize.STRING,
            allowNull: true
        },
        subscribed : {
            type: Sequelize.INTEGER,
            defaultValue: '0',
            allowNull: false
        },
        
        created_at : {
            type: 'TIMESTAMP',
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updated_at : {
            type: 'TIMESTAMP', 
            allowNull: true
        }
    }, {
      tableName: 'users',
      timestamps: false
    });
  
    return user;
  };