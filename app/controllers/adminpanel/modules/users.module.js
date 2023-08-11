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


exports.removeSubscriber = async (req, res) => {
    let id = req.params.id
    let user = await User.findByPk(id)
    if(!user) {
        return res.status(404).send( {
            success: false,
            message: "User not found"
        })
    }
    if(user.subscribed == 1){
        await User.update({subscribed: 0}, {
            where: {
                id: user.id
            }
        })
        return res.send({
            success: true,
            message: `User ${user.name} removed as subscriber successfully`,
        })
    }else {
        return res.status(501).send({
            success: false,
            message: "Already not a subscriber"
        })
    }
}