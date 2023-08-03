const publicController = require("../controllers/public.controller");
const adminController = require("../controllers/admin.controller")
const listingController = require("../controllers/listings.controller")
const stripeController = require("../controllers/stripe.controller")
const { validations } = require("../middleware")
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
    // router.get("/listing/filter", listingController.filter)
    router.get("/listing/search", listingController.search)

    router.get("/features", adminController.features.index)
    router.get("/category", adminController.category.index)
    router.post("/subscribe",validations.subscribe, publicController.subscribe)

    // Pluralo APIs
    router.get("/suppliers", adminController.pluralo.index)
    router.get("/suppliers/(:id)", adminController.pluralo.products)
    router.get("/suppliers/not-listed/(:id)", adminController.pluralo.productsNotListed)
    // Pluralo APIs for Booking
    router.post("/listings/availability", validations.listingAvailability, adminController.pluralo.listingAvailbility) // pluralo api for getting all the event times and details
    router.put("/listings/availability/(:event_id)", validations.listingAvailabilityPerEventId, adminController.pluralo.listingAvailbilityPerEventId) // pluralo api for getting all the event times and details

    // Pre booking for listing
    router.put("/listings/prebooking/(:event_id)", validations.preBookingEvent, adminController.pluralo.preBookingEvent)
   
    // Stripe payment endpoints
    router.post("/stripe/intialize", validations.stripeValidation, stripeController.intialize) 

    // Get all locations from database.
    router.get("/city", adminController.city.index)
    // Filter listings based on dates and location
    router.put("/listings/filter/(:location_id)", validations.filterListing, listingController.filter)
    // Contact form save 
    router.post("/contact-us/", validations.contactForm, publicController.contactForm)
  });
};