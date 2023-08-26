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
    let users = await db.Subscribe.findAll()
    return res.send(users)
}


exports.removeSubscriber = async (req, res) => {
    let id = req.params.id
    let user = await db.Subscribe.findByPk(id)
    if(!user) {
        return res.status(404).send( {
            success: false,
            message: "Already not a subscriber"
        })
    }
    db.Subscribe.destroy({
        where: {
            id: id
        }
    })
    return res.send({
        success: true,
        message: `User ${user.email} removed as subscriber successfully`,
    })
}