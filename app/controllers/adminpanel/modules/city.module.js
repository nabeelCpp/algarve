const db = require('../../../models');
const Op = db.Sequelize.Op;
const {City} = db;
const publicController = require("../../public.controller");
exports.index = async (req, res) => {
    let id = req.params?.id
    let data = []
    if(id) {
        data = await City.findByPk(id)
        if(!data){
            let message = "No City found"
            return res.status(404).send({
                success: false,
                message: message
            })
        }
    }else{
        data = await City.findAll()
    }
    return res.send(data)
}

exports.create = async (req, res) => {
    let body = req.body
    // make logic for checking uid
    let createObj = {
        city: body.city,
        lat: body.lat,
        lon: body.lon,
        country: body.country
    }
    try {
        let city = await City.create(createObj)
        return res.send({
            success: true,
            message: "City created successfully!",
            data: city
        })
    } catch (error) {
        return publicController.errorHandlingFunc(req, res, error.message);
    }
}

exports.update = async (req, res) => {
    let id = req.params.id
    let body = req.body
    let city = await City.findByPk(id)
    if(!city) {
        return res.send({
            success: false,
            message: "City not found"
        })
    }
    let updateObj = {
        city: body.city,
        lat: body.lat,
        lon: body.lon,
        country: body.country
    }
    try {
        let city = await City.update(updateObj, {
            where: {
                id: id
            }
        })
        return res.send({
            success: true,
            message: "City updated successfully!",        
        })
    } catch (error) {
        return publicController.errorHandlingFunc(req, res, error.message);
    }
}

exports.delete = async (req, res) => {
    let id = req.params.id
    let city = await City.findByPk(id)
    if(!city) {
        return res.send({
            success: false,
            message: "City not found"
        })
    }
    try {
       City.destroy({
        where: {
            id: id
        }
       })
        return res.send({
            success: true,
            message: "City Deleted successfully!",        
        })
    } catch (error) {
        return publicController.errorHandlingFunc(req, res, error.message);
    }
}