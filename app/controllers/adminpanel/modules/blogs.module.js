const db = require('../../../models');
const Op = db.Sequelize.Op;
const {Admin, Blogs} = db;
const publicController = require("../../public.controller");
exports.index = async (req, res) => {
    let id = req.params?.id
    let data = []
    if(id) {
        data = await Blogs.findByPk(id)
        if(!data){
            let message = "No Blog found"
            return res.status(404).send({
                success: false,
                message: message
            })
        }
    }else{
        data = await Blogs.findAll()
    }
    return res.send(data)
}

exports.create = async (req, res) => {
    let body = req.body
    // make logic for checking uid
    let createObj = {
        title: body.title,
        video_link: body.video_link,
        description: body.description
    }
    try {
        let Blog = await Blogs.create(createObj)
        return res.send({
            success: true,
            message: "Blog created successfully!",
            data: Blog
        })
    } catch (error) {
        return publicController.errorHandlingFunc(req, res, error.message);
    }
}

exports.update = async (req, res) => {
    let id = req.params.id
    let body = req.body
    let Blog = await Blogs.findByPk(id)
    if(!Blog) {
        return res.send({
            success: false,
            message: "Blog not found"
        })
    }
    let updateObj = {
        title: body.title,
        video_link: body.video_link,
        description: body.description,
        updated_at: new Date().toISOString()
    }
    try {
        let Blog = await Blogs.update(updateObj, {
            where: {
                id: id
            }
        })
        return res.send({
            success: true,
            message: "Blog updated successfully!",        
        })
    } catch (error) {
        return publicController.errorHandlingFunc(req, res, error.message);
    }
}

exports.delete = async (req, res) => {
    let id = req.params.id
    let Blog = await Blogs.findByPk(id)
    if(!Blog) {
        return res.send({
            success: false,
            message: "Blog not found"
        })
    }
    try {
       Blogs.destroy({
        where: {
            id: id
        }
       })
        return res.send({
            success: true,
            message: "Blog Deleted successfully!",        
        })
    } catch (error) {
        return publicController.errorHandlingFunc(req, res, error.message);
    }
}