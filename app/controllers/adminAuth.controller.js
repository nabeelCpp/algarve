const db = require("../models");
const config = require("../config/auth.config");

const {Admin} = db;


const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcrypt");


exports.signin = (req, res) => {
  Admin.findOne({
    where: {
      username: req.body.username
    }
  })
    .then(admin => {
      if (!admin) {
        return res.status(404).send({ message: "User Not found." });
      }
      
      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        admin.password
      );
      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }

      let token = jwt.sign({ id: admin.id, role: "admin" }, config.secret, {
        expiresIn: 8640000 // 24 hours
      });
      res.status(200).send({
        success: true,
        data:{
          id: admin.id,
          username: admin.username,
          email: admin.email,
          first_name: admin.first_name,
          last_name: admin.last_name,
          accessToken: token
        }
      });  
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};