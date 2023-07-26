module.exports = (sequelize, Sequelize) => {
    const bookings = sequelize.define("bookings", {
        id : {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        userId : {
            type: Sequelize.INTEGER, 
            allowNull: false
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
        status: {
            type: Sequelize.INTEGER, 
            defaultValue: '1',
            allowNull: false
        },
        ListingId: {
            type: Sequelize.INTEGER,
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