const db = require('../../../models');
const Op = db.Sequelize.Op;
const {Features} = db;
const publicController = require("../../public.controller");
exports.index = async (req, res) => {
    let id = req.params?.id
    let data = []
    if(id) {
        data = await Features.findByPk(id)
        if(!data){
            let message = "No Features found"
            return res.status(404).send({
                success: false,
                message: message
            })
        }
    }else{
        data = await Features.findAll()
    }
    return res.send(data)
}

exports.create = async (req, res) => {
    let body = req.body
    // make logic for checking uid
    let createObj = {
        name: body.name,
    }
    try {
        let features = await Features.create(createObj)
        return res.send({
            success: true,
            message: "Features created successfully!",
            data: features
        })
    } catch (error) {
        return publicController.errorHandlingFunc(req, res, error.message);
    }
}

exports.update = async (req, res) => {
    let id = req.params.id
    let body = req.body
    let features = await Features.findByPk(id)
    if(!features) {
        return res.send({
            success: false,
            message: "Features not found"
        })
    }
    let updateObj = {
        name: body.name,
    }
    try {
        let features = await Features.update(updateObj, {
            where: {
                id: id
            }
        })
        return res.send({
            success: true,
            message: "Features updated successfully!",        
        })
    } catch (error) {
        return publicController.errorHandlingFunc(req, res, error.message);
    }
}

exports.delete = async (req, res) => {
    let id = req.params.id
    let features = await Features.findByPk(id)
    if(!features) {
        return res.send({
            success: false,
            message: "Features not found"
        })
    }
    try {
       Features.destroy({
        where: {
            id: id
        }
       })
        return res.send({
            success: true,
            message: "Features Deleted successfully!",        
        })
    } catch (error) {
        return publicController.errorHandlingFunc(req, res, error.message);
    }
}