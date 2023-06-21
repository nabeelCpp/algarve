const { authJwt, validations } = require("../middleware");
const userController = require("../controllers/user.controller");
// const adminController = require("../controllers/admin.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.group("/api/userpanel", (router) => {
    router.use([authJwt.verifyToken, authJwt.isUser]);
    router.get("/profile", userController.profile.index);
    router.get("/listing/subscribe/(:id)", userController.dashboard.subscribeListing);
    router.get("/listing/unsubscribe/(:id)", userController.dashboard.unSubscribeListing);
    router.get("/listing/subscribed", userController.dashboard.subscribedListings);
  });
};