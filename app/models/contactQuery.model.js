module.exports = (sequelize, Sequelize) => {
    const contact_us_queries = sequelize.define("contact_us_queries", {
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
        message : {
            type: Sequelize.TEXT,
            allowNull: false
        },
        created_at : {
            type: 'TIMESTAMP',
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        status : {
            type: Sequelize.INTEGER,
            defaultValue: '0', 
            allowNull: true
        },
        
    }, {
      tableName: 'contact_us_queries',
      timestamps: false
    });
  
    return contact_us_queries;
  };