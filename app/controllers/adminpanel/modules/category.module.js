const db = require('../../../models');
const Op = db.Sequelize.Op;
const {Category} = db;
const publicController = require("../../public.controller");
exports.index = async (req, res) => {
    let id = req.params?.id
    let data = []
    if(id) {
        data = await Category.findByPk(id)
        if(!data){
            let message = "No Category found"
            return res.status(404).send({
                success: false,
                message: message
            })
        }
    }else{
        data = await Category.findAll()
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
        let category = await Category.create(createObj)
        return res.send({
            success: true,
            message: "Category created successfully!",
            data: category
        })
    } catch (error) {
        return publicController.errorHandlingFunc(req, res, error.message);
    }
}

exports.update = async (req, res) => {
    let id = req.params.id
    let body = req.body
    let category = await Category.findByPk(id)
    if(!category) {
        return res.send({
            success: false,
            message: "Category not found"
        })
    }
    let updateObj = {
        name: body.name,
    }
    try {
        let category = await Category.update(updateObj, {
            where: {
                id: id
            }
        })
        return res.send({
            success: true,
            message: "Category updated successfully!",        
        })
    } catch (error) {
        return publicController.errorHandlingFunc(req, res, error.message);
    }
}

exports.delete = async (req, res) => {
    let id = req.params.id
    let category = await Category.findByPk(id)
    if(!category) {
        return res.send({
            success: false,
            message: "Category not found"
        })
    }
    try {
       category.destroy({
        where: {
            id: id
        }
       })
        return res.send({
            success: true,
            message: "Category Deleted successfully!",        
        })
    } catch (error) {
        return publicController.errorHandlingFunc(req, res, error.message);
    }
}