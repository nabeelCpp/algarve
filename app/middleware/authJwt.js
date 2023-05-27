const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const db = require("../models");
const User = db.User;
const Admin = db.Admin;

verifyToken = (req, res, next) => {
  if(!req.headers["authorization"]){
    return res.status(403).send({
      message: 'Authorization token is required'
    })
  }
  let token = req.headers["authorization"].split(" ")[1];

  if (!token) {
    return res.status(403).send({
      message: "No token provided!"
    });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!"
      });
    }
    req.userId = decoded.id;
    req.role = decoded.role;
    next();
  });
};

const isAdmin = (req, res, next) => {
  if(req.role == 'admin'){
    Admin.findByPk(req.userId, {
      attributes: { exclude: ['password'] },
    }).then(admin => {
      if(admin){
        req.admin = admin;
       next();
       return; 
      }
      res.status(404).send({
        message: "No Admin found!"
      });
      return;
    })
  }else{
    res.status(403).send({
      message: "Require Admin Role!"
    });
    return;
  }
};


const isUser = (req, res, next) => {
  if(req.role == 'user'){
    User.findByPk(req.userId, {
      attributes: { exclude: ['password'] },
    }).then(user => {
      if(user){
        req.user = user;
       next();
       return; 
      }
      res.status(404).send({
        message: "No user found!"
      });
      return;
    })
  }else{
    res.status(403).send({
      message: "Require User Role!"
    });
    return;
  }
};





const authJwt = {
  verifyToken: verifyToken,
  isAdmin: isAdmin,
  isUser: isUser,
};
module.exports = authJwt;