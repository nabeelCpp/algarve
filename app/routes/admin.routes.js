const { authJwt, validations } = require("../middleware")
const adminController = require("../controllers/admin.controller")

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    )
    next()
  })

  app.group("/api/admin", (router) => {
    router.use([authJwt.verifyToken, authJwt.isAdmin])
    router.get("/", adminController.adminPanel)
    // members list
    router.get("/listings", adminController.listings.index)
  })
}