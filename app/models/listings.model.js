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
            allowNull: true
        },
        video_link : {
            type: Sequelize.STRING, 
            allowNull: false
        },
        no_of_guests : {
            type: Sequelize.INTEGER, 
            allowNull: true
        },
        no_of_pets : {
            type: Sequelize.INTEGER, 
            allowNull: true
        },
        no_of_adults : {
            type: Sequelize.INTEGER, 
            allowNull: true
        },
        category_id : {
            type: Sequelize.INTEGER, 
            allowNull: true
        },
        city : {
            type: Sequelize.STRING, 
            allowNull: true
        },
        country : {
            type: Sequelize.STRING, 
            allowNull: true
        },
        features : {
            type: Sequelize.STRING, 
            allowNull: true
        },
        long_description : {
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
            allowNull: true
        },
        stay_type : {
            type: Sequelize.STRING, 
            allowNull: true
        },
        contact_number : {
            type: Sequelize.STRING, 
            allowNull: true
        },
        short_description : {
            type: Sequelize.STRING, 
            allowNull: true
        },
        additional_info : {
            type: Sequelize.TEXT, 
            allowNull: true
        },
        image_logo : {
            type: Sequelize.STRING, 
            allowNull: true
        },
        lat : {
            type: Sequelize.STRING, 
            allowNull: true
        },
        lon : {
            type: Sequelize.STRING, 
            allowNull: true
        },
        location_id : {
            type: Sequelize.INTEGER, 
            allowNull: true
        },
        agent_id : {
            type: Sequelize.INTEGER, 
            allowNull: true
        },
        product_id : {
            type: Sequelize.INTEGER, 
            allowNull: true
        },
        is_free : {
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
        },
        
    }, {
      tableName: 'listings',
      timestamps: false
    });
  
    return listings;
  };