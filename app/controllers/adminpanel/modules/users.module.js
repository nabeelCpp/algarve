const db = require('../../../models');
const axios = require('axios')
const Op = db.Sequelize.Op;
const {Admin, Listings, Gallery, User} = db;
const publicController = require("../../public.controller");

exports.index = async (req, res) => {
    let users = await User.findAll()
    return res.send(users)
}

exports.delete = async (req, res) => {
    let id = req.params.id
    try {
        await User.destroy({
            where: {
                id: id
            }
        })
        return res.send({
            success: true,
            message: "User Deleted successfully!",     
        })
    } catch (error) {
        return publicController.errorHandlingFunc(req, res, error.message);
    }
}

exports.subscribers = async (req, res) => {
    let users = await User.findAll({
        where: {
            subscribed: 1
        }
    })
    return res.send(users)
}