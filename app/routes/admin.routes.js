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
    router.put("/listings/gallery/(:id)", adminController.listings.updateGallery)

    
    // Blog
    router.post("/blogs", validations.blogCreate, adminController.blogs.create)
    router.get("/blogs", adminController.blogs.index)
    router.get("/blogs/(:id)", adminController.blogs.index)
    router.put("/blogs/(:id)",validations.blogCreate, adminController.blogs.update)
    router.delete("/blogs/(:id)", adminController.blogs.delete)


    // City
    router.post("/city", validations.cityCreate, adminController.city.create)
    router.get("/city", adminController.city.index)
    router.get("/city/(:id)", adminController.city.index)
    router.put("/city/(:id)",validations.cityCreate, adminController.city.update)
    router.delete("/city/(:id)", adminController.city.delete)
  })
}