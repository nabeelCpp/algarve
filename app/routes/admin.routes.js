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
    // Listings
    router.post("/listings", validations.listingCreate, adminController.listings.create)
    router.get("/listings", adminController.listings.index)
    router.get("/listings/(:id)", adminController.listings.index)
    router.put("/listings/(:id)",validations.listingCreate, adminController.listings.update)
    router.delete("/listings/(:id)", adminController.listings.delete)
  })
}