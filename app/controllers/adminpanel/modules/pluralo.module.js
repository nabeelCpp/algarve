const db = require('../../../models');
const axios = require('axios')
const Op = db.Sequelize.Op;
const {Booking, Listings} = db;
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
        return res.status(503).send({success: false, message: err.response.data.Data.ErrorMessage})
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
        return res.status(503).send({success: false, message: err.response.data.Data.ErrorMessage})
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
        return res.status(503).send({success: false, message: err.response.data.Data.ErrorMessage})
    })
}



exports.listingAvailbility = async (req, res) => {
    let body = req.body
    axios.get(`${process.env.PLURALO_URL}/integration/v1/product/availability`, {
        headers: {
          "apiKey": process.env.PLURALO_API_KEY
        }, data: {
            "SupplierId": body.SupplierId,
            "ProductId": body.ProductId,
            "DateStart": body.date,
            "DateEnd": body.date
        }
    }).then(async (response) => {
        let data = response.data
        return res.send(response.data)
    }).catch(err => {
        return res.status(503).send({success: false, message: err.response.data.Data.ErrorMessage})
    })
}

exports.listingAvailbilityPerEventId = async (req, res) => {
    let eventId = req.params.event_id
    let SupplierId = req.body.SupplierId
    axios.get(`${process.env.PLURALO_URL}/integration/v1/event/availability`, {
        headers: {
          "apiKey": process.env.PLURALO_API_KEY
        }, data: {
            "SupplierId": SupplierId,
            "EventId":eventId
        }
    }).then(async (response) => {
        let data = response.data
        return res.send(response.data)
    }).catch(err => {
        return res.status(503).send({success: false, message: err.response.data.Data.ErrorMessage})
    })
}


exports.preBookingEvent = async (req, res) => {
    let eventId = req.params.event_id
    let adults = req.body.Adults
    let children = req.body.Children?req.body.Children:0
    let random = await publicController.makeid(8)
    let data = {
        "EventId": eventId,
        "BookingOperatorCode": `${process.env.PLURALO_PREFIX}${random}`,
        "Audiences": [
            {
                "AudienceType": "ADULT",
                "Quantity": adults
            },
            {
                "AudienceType": "Children",
                "Quantity": children
            }
        ]
    }
    axios.post(`${process.env.PLURALO_URL}/integration/v1/book/prebook`, data, {
        headers: {
          "apiKey": process.env.PLURALO_API_KEY
        }
    }).then(async (response) => {
        return res.send(response.data)
    }).catch(err => {
        console.log(err.response)
        return res.status(503).send({success: false, message: err.response.data.Data.ErrorMessage})
    })
}


exports.bookingEvent = async (req, res) => {
    let referenceId = req.params.ref_id
    let body = req.body
    let data = {
        "ReferenceNumber": referenceId,
        "BookingOperatorCode": body.BookingOperatorCode,
        "TravellerContact": {
            "FirstName": body.TravelerFirstName,
            "LastName": body?.TravelerLastName,
            "Email": body.TravelerEmail,
            "PhoneNumber": body.TravelerPhone
        },
        "Note": ""
    }
    axios.post(`${process.env.PLURALO_URL}/integration/v1/book/create`, data, {
        headers: {
          "apiKey": process.env.PLURALO_API_KEY
        }
    }).then(async (response) => {
        let responseData = response.data
        let Data = responseData.Data
        let insertBooking = {
            BookingNumber: Data.BookingNumber,
            userId: req.user.id,
            TicketNumber: Data.TicketNumber,
            PaxTotal: Data.PaxTotal,
            BillingTotal: Data.BillingTotal,
            BookingOperatorCode: Data.BookingOperatorCode,
            EventDate: Data.EventDate,
            CancelationPolicyDate: Data.CancelationPolicyDate,
            ListingId: body.ListingId
        }
        Booking.create(insertBooking)
        return res.send({
            success: true,
            message: "Booking created successfully.",
            data: insertBooking
        })
    }).catch(err => {
        return res.status(503).send({success: false, message: err.response.data.Data.ErrorMessage})
    })
}

exports.cancelBooking = async (req, res) => {
    let referenceId = req.params.ref_id
    let data = {
        "BookingReference": referenceId,
    }
    axios.post(`${process.env.PLURALO_URL}/integration/v1/book/Cancel`, data, {
        headers: {
          "apiKey": process.env.PLURALO_API_KEY
        }
    }).then(async (response) => {
        let responseData = response.data
        let Data = responseData.Data

        if(responseData.Success){
            await Booking.update({status: 0}, {
                where: {
                    BookingNumber: referenceId
                }
            })
            return res.send({
                success: true,
                message: "Booking Cancelled successfully.",
                data: Data
            })
        }else{
            return res.send({
                success: false,
                message: "Error while cancelling booking.",
                data: Data
            })
        }
    }).catch(err => {
        return res.status(503).send({success: false, message: err.response.data.Data.ErrorMessage})
    })
}