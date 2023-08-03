const { authJwt, validations } = require("../middleware")
const adminController = require("../controllers/admin.controller")
const publicController = require("../controllers/public.controller")

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
    router.put("/blogs/image/(:id)", adminController.blogs.updateImage)


    // City
    router.post("/city", validations.cityCreate, adminController.city.create)
    router.get("/city", adminController.city.index)
    router.get("/city/(:id)", adminController.city.index)
    router.put("/city/(:id)",validations.cityCreate, adminController.city.update)
    router.delete("/city/(:id)", adminController.city.delete)

    // Category
    router.post("/category", validations.categoryCreate, adminController.category.create)
    router.get("/category", adminController.category.index)
    router.get("/category/(:id)", adminController.category.index)
    router.put("/category/(:id)",validations.categoryCreate, adminController.category.update)
    router.delete("/category/(:id)", adminController.category.delete)
    // Features
    router.post("/features", validations.featuresCreate, adminController.features.create)
    router.get("/features", adminController.features.index)
    router.get("/features/(:id)", adminController.features.index)
    router.put("/features/(:id)",validations.featuresCreate, adminController.features.update)
    router.delete("/features/(:id)", adminController.features.delete)

    // Users
    router.get("/users", adminController.users.index)
    router.delete("/users/(:id)", adminController.users.delete)
    router.get("/subscribers", adminController.users.subscribers)

    // Contact messages
    router.get("/contact-us", publicController.allContactMessages)
    router.put("/contact-us/(:id)", publicController.changeMessageStatus)
    router.delete("/contact-us/(:id)", publicController.deleteMessage)

  })
}