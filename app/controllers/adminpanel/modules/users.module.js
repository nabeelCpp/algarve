const db = require('../../../models');
const axios = require('axios')
const Op = db.Sequelize.Op;
const {Admin, Listings, Gallery, User} = db;
const publicController = require("../../public.controller");

exports.index = async (req, res) => {
    let users = await User.findAll()
    return res.send(users)
}

exports.subscribers = async (req, res) => {
    let users = await User.findAll({
        where: {
            subscribed: 1
        }
    })
    return res.send(users)
}