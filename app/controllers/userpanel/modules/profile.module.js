const db = require('../../../models');
const Op = db.Sequelize.Op;
const {User, Booking} = db;
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