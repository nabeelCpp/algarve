const db = require("../models");
const { Country, States, User, ContactQuery, Subscribe } = db;

exports.index = async (req, res) => {
    return res.send({
        message: "API is running!"
    })
}

exports.countries = async (req, res) => {
    const countries = await Country.findAll();
    return res.status(200).send(countries);
}

exports.country = async (req, res) => {
    const country = await Country.findByPk(req.params.id);
    return res.status(200).send(country);
}

exports.states = async (req, res) => {
    const states = await States.findAll({
        where: {
            country_id: req.params.country_id,
        }
    });
    return res.status(200).send(states?states:[]);
}

exports.state = async (req, res) => {
    const state = await States.findByPk(req.params.id);
    return res.status(200).send(state?state:[]);
}

exports.errorHandlingFunc = (req, res, error) => {
    return res.status(503).send({
        success: false,
        error: error
    });
}

exports.currentDate = () => {
    const NOW = new Date();
    return NOW.toISOString().split['T'][0];
}

exports.currentDateTime = () => {
    return new Date().toISOString();
}

// exports.packages = async (req, res) => {
//     let packages = await statusMaintenance.findAll({attributes: ['id', 'name', 'amount']});
//     return res.status(200).send(packages)
// }

// exports.vendorServices = async(req, res) => {
//     let services = await venderServices.findAll();
//     return res.status(200).send(services);
// }

exports.makeid = async (length=10) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

exports.makeidNumeric = async (length=10) => {
    let result = '';
    const characters = '0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

exports.subscribe = async (req, res) => {
    let body = req.body
    try {
        let user = await Subscribe.findOne({
            where: {
                email: body.email
            }
        })
        if(user){
            return res.status(500).send({
                success: false,
                message: "Email Already Subscribed"
            })
        }
    
        Subscribe.create({
            email: body.email,
        })
        return res.send({
            success: true,
            message: "User subscribed successfully"
        })
    } catch (err) {
        return res.status(503).send({success: false, message: err.response.data.Data.ErrorMessage})
    }
}

exports.contactForm = async (req, res) => {
    try {
        let body = req.body
        ContactQuery.create({
            name: body.name, 
            email: body.email,
            message: body.message
        })
        return res.send({
            success: true,
            message: "Form submitted successfully!"
        })
    } catch (error) {
        return this.errorHandlingFunc(req, res, error.message);
    }
}

exports.allContactMessages = async (req, res) => {
    let messages = await ContactQuery.findAll();
    return res.send(messages)
}

exports.changeMessageStatus = async (req, res) => {
    let id = req.params.id
    let body = req.body
    try {
        let updateObj = {status: body.status}
        await ContactQuery.update(updateObj, {
            where: {
                id: id
            }
        })
        return res.send({
            success: true,
            message: "Message Status updated successfully!",     
        })
    } catch (error) {
        return this.errorHandlingFunc(req, res, error.message);
    }
}

// Delete Message
exports.deleteMessage = async (req, res) => {
    let id = req.params.id
    try {
        await ContactQuery.destroy({
            where: {
                id: id
            }
        })
        return res.send({
            success: true,
            message: "Message Deleted successfully!",     
        })
    } catch (error) {
        return this.errorHandlingFunc(req, res, error.message);
    }
}