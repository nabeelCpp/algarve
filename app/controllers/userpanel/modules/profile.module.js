const db = require('../../../models');
const Op = db.Sequelize.Op;
const {User, Booking, Listings} = db;
// const publicController = require("../../public.controller");
// const multer = require("multer");
// const fs = require('fs');
// const path = require('path');
exports.index = async (req, res) => {
    return res.send({
        message: true
    })
}

exports.bookings = async (req, res) => {
    let user = req.user
    const bookings = await Booking.findAll({
        where: {
            userId: user.id
        }
    })
    for (let i = 0; i < bookings.length; i++) {
        const booking = bookings[i].getValues();
        if(booking.ListingId){
            let listing = await Listings.findByPk(booking.ListingId);
            booking.listing = listing
        }
        
    }
    return res.send(bookings)
}
exports.singleBooking = async (req, res) => {
    let user = req.user
    let id = req.params.id
    const booking = await Booking.findOne({
        where: {
            id: id,
            userId: user.id
        }
    })
    return res.send(booking)
}

// exports.removeSubscribe = async (req, res) => {
//     let user = req.user

//     /**
//      * Check for subscriber
//      */
//     const subscriber  = db.Subscribe.findOne({
//         where: {
//             email: user.email
//         }
//     })
//     if(subscriber){
//         db.Subscribe.destroy({
//             where: {
//                 email: body.email
//             }
//         })
//         return res.send({
//             success: true,
//             message: "User un-subscribed successfully",
//         })
//     }
//     return res.status(500).send({
//         success: false,
//         message: "User not in subscribers list"
//     })
// }