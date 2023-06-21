module.exports = (sequelize, Sequelize) => {
    const category = sequelize.define("categories", {
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
        created_at : {
            type: 'TIMESTAMP',
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updated_at : {
            type: 'TIMESTAMP',
            allowNull: true
        },
        
    }, {
      tableName: 'categories',
      timestamps: false
    });
  
    return category;
  };