module.exports = (sequelize, Sequelize) => {
    const subscribers = sequelize.define("subscribers", {
        id : {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        email : {
            type: Sequelize.STRING,
            allowNull: false
        },
        created_at : {
            type: 'TIMESTAMP',
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    }, {
      tableName: 'subscribers',
      timestamps: false
    });
  
    return subscribers;
  };