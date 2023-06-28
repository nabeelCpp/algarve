const db = require('../../../models');
const axios = require('axios')
const Op = db.Sequelize.Op;
const {Admin, Listings, Gallery} = db;
const publicController = require("../../public.controller");
const multer = require("multer");
const fs = require('fs');
const path = require('path');
const { listings } = require('../../admin.controller');
exports.index = async (req, res) => {
    axios.get(`${process.env.PLURALO_URL}/integration/v1/supplier/suppliers`, {
        headers: {
          "apiKey": process.env.PLURALO_API_KEY
        }
    }).then(response => {
        return res.send(response.data)
    }).catch(err => {
        return res.status(503).send({success: false, message: err.response.statusText})
    })
}


exports.products = async (req, res) => {
    let id = req.params.id
    axios.get(`${process.env.PLURALO_URL}/integration/v1/product/products`, {
        headers: {
          "apiKey": process.env.PLURALO_API_KEY
        }, data: {
            "SupplierId": id
        }
    }).then(response => {
        return res.send(response.data)
    }).catch(err => {
        return res.status(503).send({success: false, message: err.response.statusText})
    })
}


exports.productsNotListed = async (req, res) => {
    let id = req.params.id
    axios.get(`${process.env.PLURALO_URL}/integration/v1/product/products`, {
        headers: {
          "apiKey": process.env.PLURALO_API_KEY
        }, data: {
            "SupplierId": id
        }
    }).then(async (response) => {
        let data = response.data
        for (let i = 0; i < data.Data.length; i++) {
            const d = data.Data[i]
            let listing = await Listings.findOne({
                where: {
                    agent_id: id,
                    product_id: d.Id
                }
            })
            if(listing){
                response.data.Data = data.Data.filter(obj => obj.Id !== d.Id)
            }
        }
        return res.send(response.data)
    }).catch(err => {
        return res.status(503).send({success: false, message: err.response.statusText})
    })
}