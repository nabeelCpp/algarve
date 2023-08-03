const db = require("../models");
const config = require("../config/auth.config");
const {Listings, Gallery, Category, City} = db;
const Op = db.Sequelize.Op

const axios = require('axios')
exports.filter = async (req, res) => {
    try {
        let body = req.body
        let location_id = req.params.location_id
        let listings = await Listings.findAll({
            where: {
                location_id: location_id
            }
        })
        for (let i = 0; i < listings.length; i++) {
            const listing = listings[i].getValues()
            listing.features = listing.features?listing.features.split(','):[]
            let gallery = await Gallery.findAll({
                where: {
                    listing_id: listing.id
                }
            })
            for (let i = 0; i < gallery.length; i++) {
                const g = gallery[i].getValues();
                g.image = `${process.env.BASE_URL}/listings/${listing.uid}/${g.image}`
            }
            let category = await Category.findByPk(listing.category_id)
            listing.category = category
            let location = []
            if(listing.location_id){
                location = await City.findByPk(listing.location_id)
            }
            listing.location = location
            listing.gallery = gallery
        }
        // let filtered = []
        // for (let i = 0; i < listings.length; i++) {
        //     const listing = listings[i].getValues()
        //     axios.get(`${process.env.PLURALO_URL}/integration/v1/product/availability`, {
        //         headers: {
        //         "apiKey": process.env.PLURALO_API_KEY
        //         }, data: {
        //             "SupplierId": listing.agent_id,
        //             "ProductId": body.product_id,
        //             "DateStart": body.checkin,
        //             "DateEnd": body.checkout
        //         }
        //     }).then(async (response) => {
        //         filtered.push(listing)
        //     }).catch(err => {
        //         console.log(err.response.data.Data.ErrorMessage)
        //     })
        // }
        return res.send(listings)
    } catch (err) {
        return res.status(503).send({success: false, message: err.response.data.Data.ErrorMessage})
    }
}

exports.search = async (req, res) => {
    let body = req.body
    let search = body.search
    let filter = await Listings.findAll({
        where: {
            [Op.or]: [
                {
                    title: {
                        [Op.like]: `%${search}%`
                    }
                },
                {
                    description: {
                        [Op.like]: `%${search}%`
                    }
                }
            ]
        }
    })
    return res.send(filter)
}