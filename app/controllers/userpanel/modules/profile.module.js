const db = require('../../../models');
const Op = db.Sequelize.Op;
const {User} = db;
// const publicController = require("../../public.controller");
// const multer = require("multer");
// const fs = require('fs');
// const path = require('path');
exports.index = async (req, res) => {
    return res.send({
        message: true
    })
}