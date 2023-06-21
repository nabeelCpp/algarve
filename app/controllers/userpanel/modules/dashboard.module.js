const db = require('../../../models');
const Op = db.Sequelize.Op;
const {User, Listings, SavedListing} = db;
// const publicController = require("../../public.controller");
// const multer = require("multer");
// const fs = require('fs');
// const path = require('path');
exports.subscribeListing = async (req, res) => {
    let user = req.user
    let listingId = req.params.id
    let listing = await Listings.findByPk(listingId)
    if(!listing){
        return res.status(404).send({
            success: false,
            message: "Listing not found to be subscribed"
        })
    }
    let checkSubscribed = await SavedListing.findOne({
        where: {
            listing_id: listingId,
            user_id: user.id
        }
    })
    if(checkSubscribed){
        return res.status(403).send({
            success: false,
            message: 'Already subscribed same listing'
        })
    }
    SavedListing.create({
        listing_id: listingId,
        user_id: user.id
    })
    return res.send({
        success: true,
        message: "Listing subscribed successfully!"
    })
}

exports.unSubscribeListing = async (req, res) => {
    let user = req.user
    let listingId = req.params.id
    let listing = await Listings.findByPk(listingId)
    if(!listing){
        return res.status(404).send({
            success: false,
            message: "Listing not found to be un-subscribed"
        })
    }
    let checkSubscribed = await SavedListing.findOne({
        where: {
            listing_id: listingId,
            user_id: user.id
        }
    })
    if(!checkSubscribed){
        return res.status(403).send({
            success: false,
            message: 'Subscription not found'
        })
    }
    SavedListing.destroy({
        where: {
            listing_id: listingId,
            user_id: user.id
        }
    })
    return res.send({
        success: true,
        message: "Listing un-ubscribed successfully!"
    })
}

exports.subscribedListings = async (req, res) => {
    let user = req.user
    let subscribendListings = await SavedListing.findAll({
        where: {
            user_id: user.id
        }
    })
    const listings = []
    for (let i = 0; i < subscribendListings.length; i++) {
        const s = subscribendListings[i].getValues()
        let listing = await Listings.findByPk(s.listing_id)
        listings.push(listing)
    }
    return res.send(listings)
}