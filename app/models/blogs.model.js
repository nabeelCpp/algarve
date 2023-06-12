module.exports = (sequelize, Sequelize) => {
    const blogs = sequelize.define("blogs", {
        id : {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        title : {
            type: Sequelize.STRING, 
            allowNull: false
        },
        video_link : {
            type: Sequelize.STRING, 
            allowNull: false
        },
        description : {
            type: Sequelize.TEXT, 
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
      tableName: 'blogs',
      timestamps: false
    });
  
    return blogs;
  };