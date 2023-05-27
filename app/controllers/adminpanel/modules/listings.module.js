const db = require('../../../models');
const Op = db.Sequelize.Op;
const {Admin} = db;
exports.index = async (req, res) => {
    return res.send({
        message: true
    })
}