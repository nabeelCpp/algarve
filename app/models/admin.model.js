module.exports = (sequelize, Sequelize) => {
    const admin = sequelize.define("admin", {
        id : {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        username : {
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
        first_name : {
            type: Sequelize.STRING,
            allowNull: false
        },
        last_name : {
            type: Sequelize.STRING,
            
            allowNull: true
        },
        super : {
            type: Sequelize.TINYINT,
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
        },
        created_by : {
            type: Sequelize.STRING,
            allowNull: true
        },
        updated_by : {
            type: Sequelize.STRING,
            allowNull: true
        },
        
    }, {
      tableName: 'admin',
      timestamps: false
    });
  
    return admin;
  };