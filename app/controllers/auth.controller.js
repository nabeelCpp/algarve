const db = require("../models");
const config = require("../config/auth.config");
const {User} = db;


const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcrypt");
const { statusMaintenance } = require("../models");
exports.signup = (req, res) => {
  req.body.password = bcrypt.hashSync(req.body.password, 12);  
  const insert = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  }
  User.create(insert).then(async (response)=>{
      let token = jwt.sign({ id: response.id, role: "user" }, config.secret, {
        expiresIn: 8886400 // 102 days
      });
      return res.status(200).send({
        success: true,
        message: "User registered successfully!",
        data:{
          id: response.id,
          name: response.name,
          email: response.email,
          accessToken: token
        }
      });
  }).catch(err=>{
    return res.status(501).send({
      message: err
    });
  })
            
          
        
      
  
  
};

exports.signin = (req, res) => {
  User.findOne({
    where: {
      // username: req.body.username
      email: req.body.email
    }
  })
    .then(user => {
      if (!user) {
        return res.status(401).send({ message: "No user found with current details" });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      )

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }

      let token = jwt.sign({ id: user.id, role: "user" }, config.secret, {
        expiresIn: 8640000000 // 24 hours
      });
      res.status(200).send({
        success: true,
        data:{
          id: user.id,
          name: user.name,
          email: user.email,
          accessToken: token
        }
      });  
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};