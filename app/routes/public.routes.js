const publicController = require("../controllers/public.controller");
const adminController = require("../controllers/admin.controller")
const listingController = require("../controllers/listings.controller")
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.group("/api/", (router) => {
    router.get("/blogs", adminController.blogs.index)
    router.get("/blogs/(:id)", adminController.blogs.index)

    router.get("/listings", adminController.listings.index)
    router.get("/listings/(:id)", adminController.listings.index)
    router.get("/listing/filter", listingController.filter)
    router.get("/listing/search", listingController.search)

    router.get("/features", adminController.features.index)
    router.get("/category", adminController.category.index)
    router.get("/subscribe", publicController.subscribe)

    // Pluralo APIs
    router.get("/suppliers", adminController.pluralo.index)
    router.get("/suppliers/(:id)", adminController.pluralo.products)
    router.get("/suppliers/not-listed/(:id)", adminController.pluralo.productsNotListed)
  });
};