const db = require("../models");
const config = require("../config/auth.config");
const {Listings} = db;
const Op = db.Sequelize.Op

exports.filter = async (req, res) => {
    let body = req.body
    let where = {}
    let filtersOn = ["country", "city", "no_of_adults","no_of_guests", "no_of_pets" ]
    filtersOn.map(f => {
        if(body[f]){
            where[f] = body[f]    
        }
    })
    let filter = await Listings.findAll({
        where: where
    })
    return res.send(filter)
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