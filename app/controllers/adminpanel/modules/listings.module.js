const db = require('../../../models');
const Op = db.Sequelize.Op;
const {Admin, Listings} = db;
const publicController = require("../../public.controller");
exports.index = async (req, res) => {
    let id = req.params?.id
    let data = []
    if(id) {
        data = await Listings.findByPk(id)
        if(!data){
            let message = "No listing found"
            return res.status(404).send({
                success: false,
                message: message
            })
        }
    }else{
        data = await Listings.findAll()
    }
    return res.send(data)
}

exports.create = async (req, res) => {
    let body = req.body
    // check category id

    // check stay_type_id

    // check features

    // make object for saving to listings

    // generate UID
    let uid = await publicController.makeid(8)
    // make logic for checking uid
    let createObj = {
        uid: uid,
        title: body.title,
        city: body.city,
        country: body.country,
        location: body.location,
        video_link: body.video_link,
        category_id: body.category,
        description: body.description,
        // features : [1,4,6],
        no_of_guests : body.no_of_guests,
        no_of_rooms: body.no_of_rooms,
        no_of_bath_rooms: body.no_of_bath_rooms,
        rent: body.rent,
        stay_type_id: body.stay_type,
        contact_number: body.contact_number
    }
    try {
        let listing = await Listings.create(createObj)
        return res.send({
            success: true,
            message: "Listing created successfully!",
            data: listing        
        })
    } catch (error) {
        return publicController.errorHandlingFunc(req, res, error.message);
    }
}

exports.update = async (req, res) => {
    let id = req.params.id
    let body = req.body
    let listing = await Listings.findByPk(id)
    if(!listing) {
        return res.send({
            success: false,
            message: "Listing not found"
        })
    }
    let updateObj = {
        title: body.title,
        city: body.city,
        country: body.country,
        location: body.location,
        video_link: body.video_link,
        category_id: body.category,
        description: body.description,
        // features : [1,4,6],
        no_of_guests : body.no_of_guests,
        no_of_rooms: body.no_of_rooms,
        no_of_bath_rooms: body.no_of_bath_rooms,
        rent: body.rent,
        stay_type_id: body.stay_type,
        contact_number: body.contact_number
    }
    try {
        let listing = await Listings.update(updateObj, {
            where: {
                id: id
            }
        })
        return res.send({
            success: true,
            message: "Listing updated successfully!",        
        })
    } catch (error) {
        return publicController.errorHandlingFunc(req, res, error.message);
    }
}

exports.delete = async (req, res) => {
    let id = req.params.id
    let listing = await Listings.findByPk(id)
    if(!listing) {
        return res.send({
            success: false,
            message: "Listing not found"
        })
    }
    try {
       Listings.destroy({
        where: {
            id: id
        }
       })
        return res.send({
            success: true,
            message: "Listing Deleted successfully!",        
        })
    } catch (error) {
        return publicController.errorHandlingFunc(req, res, error.message);
    }
    res.send({
        message: true
    })
}