module.exports = (sequelize, Sequelize) => {
    const listings = sequelize.define("listings", {
        id : {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        uid : {
            type: Sequelize.STRING, 
            allowNull: false
        },
        title : {
            type: Sequelize.STRING, 
            allowNull: false
        },
        rating : {
            type: Sequelize.FLOAT,
            defaultValue: '0.00', 
            allowNull: false
        },
        location : {
            type: Sequelize.STRING, 
            allowNull: false
        },
        video_link : {
            type: Sequelize.STRING, 
            allowNull: false
        },
        no_of_guests : {
            type: Sequelize.INTEGER, 
            allowNull: false
        },
        no_of_rooms : {
            type: Sequelize.INTEGER, 
            allowNull: false
        },
        no_of_bath_rooms : {
            type: Sequelize.INTEGER, 
            allowNull: false
        },
        category_id : {
            type: Sequelize.INTEGER, 
            allowNull: false
        },
        city : {
            type: Sequelize.STRING, 
            allowNull: false
        },
        country : {
            type: Sequelize.STRING, 
            allowNull: false
        },
        description : {
            type: Sequelize.TEXT, 
            allowNull: false
        },
        no_of_shares : {
            type: Sequelize.INTEGER,
            defaultValue: '0', 
            allowNull: false
        },
        no_of_saved : {
            type: Sequelize.INTEGER,
            defaultValue: '0', 
            allowNull: false
        },
        rent : {
            type: Sequelize.INTEGER, 
            allowNull: false
        },
        stay_type_id : {
            type: Sequelize.INTEGER, 
            allowNull: false
        },
        contact_number : {
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
      tableName: 'listings',
      timestamps: false
    });
  
    return listings;
  };