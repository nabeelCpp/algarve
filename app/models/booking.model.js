module.exports = (sequelize, Sequelize) => {
    const bookings = sequelize.define("bookings", {
        id : {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        BookingNumber : {
            type: Sequelize.STRING, 
            allowNull: false
        },
        TicketNumber : {
            type: Sequelize.STRING, 
            allowNull: false
        },
        PaxTotal : {
            type: Sequelize.TEXT, 
            allowNull: false
        },
        BillingTotal : {
            type: Sequelize.FLOAT, 
            allowNull: true
        },
        BookingOperatorCode : {
            type: Sequelize.STRING, 
            allowNull: false
        },
        EventDate : {
            type: Sequelize.TEXT, 
            allowNull: false
        },
        CancelationPolicyDate	 : {
            type: Sequelize.TEXT, 
            allowNull: false
        },
        created_at : {
            type: 'TIMESTAMP',
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    }, {
      tableName: 'bookings',
      timestamps: false
    });
  
    return bookings;
  };