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

exports.removeSubscribe = async (req, res) => {
    let user = req.user
    if(user.subscribed == 1){
        await User.update({subscribed: 0}, {
            where: {
                id: user.id
            }
        })
        user.subscribed = 0
    }
    return res.send({
        success: true,
        message: "User un-subscribed successfully",
        data: user
    })
}