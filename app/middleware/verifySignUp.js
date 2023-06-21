const db = require("../models");
const User = db.User;

checkDuplicateUsernameOrEmailOrPhone = (req, res, next) => {
  // Username
  User.findOne({
    where: {
      email: req.body.email
    }
  }).then(user => {
    if (user) {
      res.status(400).send({
        success: false,
        message: "Failed! Email is already in use!"
      });
      return;
    }
    next();
  });
};



const verifySignUp = {
    checkDuplicateUsernameOrEmailOrPhone: checkDuplicateUsernameOrEmailOrPhone,
};

module.exports = verifySignUp;