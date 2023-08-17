const { body, validationResult } = require('express-validator');
 
exports.signupValidation = [
    body('name', 'Firstname is required').not().isEmpty(),
    body('email', 'Please include a valid email').isEmail(),
    body('password', 'Password must be 6 or more characters').isLength({ min: 6 }),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
]
 
exports.loginValidation = [
    // body('username', 'Username is required!').not().isEmpty(),
    body('email', 'Email is required!').not().isEmpty(),
    body('password', 'Password is required!').not().isEmpty(),
    body('password', 'Password must be 6 or more characters').isLength({ min: 6 }),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
]

exports.genealogyValidation = [
    body('user_id', 'Search field is required!').not().isEmpty(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
]

exports.profile = [
    body('first_name', 'Firstname is required!').not().isEmpty(),
    body('email', 'Please include a valid email').isEmail(),
    body('country', 'Country is required!').not().isEmpty(),
    body('phonecode', 'Phonecode is required').not().isEmpty(),
    body('phonecode', 'Phonecode must be between 1 to 4 digits long').isLength({ min: 1, max: 4 }),
    body('phonecode', 'Phonecode must be a number').isNumeric(),
    body('mobile', 'Mobile number is required').not().isEmpty(),
    body('mobile', 'Mobile number must be a number').isNumeric(),
    body('mobile', 'Mobile number must be between 6 to 11 digits.').isLength({ min: 6, max: 11 }),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
]

exports.updatePassword = [
    body('current_password', 'Current Password is required').not().isEmpty(),
    body('new_password', 'New Password must be 6 or more characters').isLength({ min: 6 }),
    body('confirm_password', 'Passwords do not match.').custom((value, {req})=>{
        if(value != req.body.new_password){
            return false;
        }
        return true;
    }),
    body('current_password', 'New Password must not be same as current password.').custom((value, {req})=>{
        if(value == req.body.new_password){
            return false;
        }
        return true;
    }),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
]

exports.openTicket = [
    body('category', 'Category is required').not().isEmpty(),
    body('message', 'Message is required').not().isEmpty(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
]


exports.adminPanelLogin = [
    body('username', 'Username is required').not().isEmpty(),
    body('password', 'Password is required').not().isEmpty(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
]


exports.franchisePanelLogin = [
    // body('username', 'Username is required').not().isEmpty(),
    body('email', 'Email is required').isEmail(),
    body('password', 'Password is required').not().isEmpty(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
]

const adminPanel = {};
adminPanel.updateMember = [
    body('username', 'Username is required').not().isEmpty(),
    body('first_name', 'First name is required').not().isEmpty(),
    body('email', 'Please include a valid email').isEmail(),
    body('phonecode', 'Phonecode is required').not().isEmpty(),
    body('phonecode', 'Phonecode must be between 1 to 4 digits long').isLength({ min: 1, max: 4 }),
    body('phonecode', 'Phonecode must be a number').isNumeric(),
    body('telephone', 'Mobile number is required').not().isEmpty(),
    body('telephone', 'Mobile number must be a number').isNumeric(),
    body('telephone', 'Mobile number must be between 6 to 11 digits.').isLength({ min: 6, max: 11 }),
    // body('password', 'Password is required').not().isEmpty(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
]

adminPanel.updateVendor = [
    body('first_name', 'First name is required').not().isEmpty(),
    body('email', 'Please include a valid email').isEmail(),
    body('phonecode', 'Phonecode is required').not().isEmpty(),
    body('phonecode', 'Phonecode must be between 1 to 4 digits long').isLength({ min: 1, max: 4 }),
    body('phonecode', 'Phonecode must be a number').isNumeric(),
    body('telephone', 'Mobile number is required').not().isEmpty(),
    body('telephone', 'Mobile number must be a number').isNumeric(),
    body('telephone', 'Mobile number must be between 6 to 11 digits.').isLength({ min: 6, max: 11 }),
    body('company_reg_no', 'Company registration number is required').not().isEmpty(),
    body('country', 'Country is required').not().isEmpty(),
    // body('password', 'Password is required').not().isEmpty(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
]


adminPanel.createVendor = [
    body('first_name', 'First name is required').not().isEmpty(),
    body('email', 'Please include a valid email').isEmail(),
    body('phonecode', 'Phonecode is required').not().isEmpty(),
    body('phonecode', 'Phonecode must be between 1 to 4 digits long').isLength({ min: 1, max: 4 }),
    body('phonecode', 'Phonecode must be a number').isNumeric(),
    body('telephone', 'Mobile number is required').not().isEmpty(),
    body('telephone', 'Mobile number must be a number').isNumeric(),
    body('telephone', 'Mobile number must be between 6 to 11 digits.').isLength({ min: 6, max: 11 }),
    body('company_reg_no', 'Company registration number is required').not().isEmpty(),
    body('country', 'Country is required').not().isEmpty(),
    body('credit_limit', 'Credit Limit is required').not().isEmpty(),
    body('commission_percent', 'Commission Percent is required').not().isEmpty(),
    body('password', 'Password is required').not().isEmpty(),
    body('service.id.*', 'Service cannot be empty').not().isEmpty(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
]


adminPanel.walletManagement = [
    body('user_id', 'User id is required').not().isEmpty(),
    body('amount', 'Amount is required').not().isEmpty(),
    body('wallet', 'Wallet type is required').not().isEmpty(),
    body('action', 'Action is required(Either "add" or "subtract")').not().isEmpty(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
]


adminPanel.generatePayout = [
    body('list', 'Payout list must contain atleast one element').isArray({min: 1}),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
]

adminPanel.createOfficialAnnoucement = [
    body('title', 'Title is required').not().isEmpty(),
    body('status', 'Status is required').not().isEmpty(),
    body('description', 'Description is required').not().isEmpty(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
]

adminPanel.createVideos = [
    body('title', 'Title is required').not().isEmpty(),
    body('link', 'Link is required').not().isEmpty(),
    body('description', 'Description is required').not().isEmpty(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
]

adminPanel.policyContent = [
    body('content', 'Content is required').not().isEmpty(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
]

adminPanel.userBlock = [
    body('block_status', 'Block Status is required').not().isEmpty(),
    body('member_type', 'Member Type is required').not().isEmpty(),
    body('down', 'Select either left/right/both').not().isEmpty(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
]

adminPanel.userWithdrawBlock = [
    body('block_status', 'Block Status is required').not().isEmpty(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
]


adminPanel.ticketResponse = [
    body('response', 'Response is required').not().isEmpty(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
]

adminPanel.createService = [
    body('service_name', 'Service name is required').not().isEmpty(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
]

adminPanel.saveWithdrawalRequest = [
    body('list', 'List of users is required').isArray({min: 1}),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
]

exports.adminPanel = adminPanel;



// Algarve
exports.listingCreate = [
    body('title', 'Title of listing is required').not().isEmpty(),
    body('location', 'Location of listing is required').not().isEmpty(),
    body('video_link', 'Video Link of listing is required').not().isEmpty(),
    body('no_of_guests', 'No of guests is required').not().isEmpty(),
    body('no_of_pets', 'No of Pets is required').not().isEmpty(),
    body('no_of_adults', 'No of adults is required').not().isEmpty(),
    body('category_id', 'Category is required').not().isEmpty(),
    body('city', 'City is required').not().isEmpty(),
    body('country', 'Country is required').not().isEmpty(),
    body('video_link', 'View link is required').not().isEmpty(),
    // body('long_description', 'Long Description is required').not().isEmpty(),
    // body('short_description', 'Short Description is required').not().isEmpty(),
    // body('additional_info', 'Additional information is required').not().isEmpty(),
    body('agent_id', 'Agent Id is required').not().isEmpty(),
    body('product_id', 'Product Id is required').not().isEmpty(),
    body('lat', 'Latitude is required').not().isEmpty(),
    body('lon', 'Longitude is required').not().isEmpty(),
    body('rent', 'Rent is required').not().isEmpty(),
    body('stay_type', 'Stay type is required').not().isEmpty(),
    body('location_id', 'Location is required').not().isEmpty(),
    body('contact_number', 'Contact number of listing is required').not().isEmpty(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
]


exports.listingCreateFree = [
    body('title', 'Title of listing is required').not().isEmpty(),
    body('location', 'Location of listing is required').not().isEmpty(),
    body('video_link', 'Video Link of listing is required').not().isEmpty(),
    body('no_of_guests', 'No of guests is required').not().isEmpty(),
    body('no_of_pets', 'No of Pets is required').not().isEmpty(),
    body('no_of_adults', 'No of adults is required').not().isEmpty(),
    body('category_id', 'Category is required').not().isEmpty(),
    body('city', 'City is required').not().isEmpty(),
    body('country', 'Country is required').not().isEmpty(),
    body('video_link', 'View link is required').not().isEmpty(),
    // body('long_description', 'Long Description is required').not().isEmpty(),
    // body('short_description', 'Short Description is required').not().isEmpty(),
    // body('additional_info', 'Additional information is required').not().isEmpty(),
    // body('agent_id', 'Agent Id is required').not().isEmpty(),
    // body('product_id', 'Product Id is required').not().isEmpty(),
    body('lat', 'Latitude is required').not().isEmpty(),
    body('lon', 'Longitude is required').not().isEmpty(),
    // body('rent', 'Rent is required').not().isEmpty(),
    body('stay_type', 'Stay type is required').not().isEmpty(),
    body('location_id', 'Location is required').not().isEmpty(),
    body('contact_number', 'Contact number of listing is required').not().isEmpty(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
]

exports.blogCreate = [
    body('title', 'Title of blog is required').not().isEmpty(),
    body('video_link', 'Video Link of blog is required').not().isEmpty(),
    body('description', 'Description is required').not().isEmpty(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
]


exports.cityCreate = [
    body('city', 'City name is required').not().isEmpty(),
    body('lat', 'Latitude of city is required').not().isEmpty(),
    body('lon', 'Longitude of city is required').not().isEmpty(),
    body('country', 'Country is required').not().isEmpty(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
]


exports.categoryCreate = [
    body('name', 'Category name is required').not().isEmpty(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
]


exports.featuresCreate = [
    body('name', 'Feature name is required').not().isEmpty(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
]


exports.subscribe = [
    body('email', 'Email is required').not().isEmpty(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
]


exports.listingAvailability = [
    body('SupplierId', 'SupplierId is required').not().isEmpty(),
    body('ProductId', 'ProductId is required').not().isEmpty(),
    body('date', 'Date is required').not().isEmpty(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
]

exports.listingAvailabilityPerEventId = [
    body('SupplierId', 'SupplierId is required').not().isEmpty(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
]

exports.preBookingEvent = [
    body('Adults', 'No of Adults is required').not().isEmpty(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
]

exports.bookingEvent = [
    body('BookingOperatorCode', 'BookingOperatorCode is required').not().isEmpty(),
    body('TravelerFirstName', 'Traveler FirstName is required').not().isEmpty(),
    // body('TravelerLastName', 'Traveler LastName is required').not().isEmpty(),
    body('TravelerEmail', 'Traveler Email is required').not().isEmpty(),
    body('TravelerPhone', 'Traveler Phone is required').not().isEmpty(),
    body('ListingId', 'Listing id is required').not().isEmpty(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
]

exports.stripeValidation = [
    body('amount', 'Amount must be greater than 0').isFloat({gt: 0}),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
]


exports.filterListing = [
    body('checkin', 'Date in is required').not().isEmpty(),
    body('checkout', 'Date out is required').not().isEmpty(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
]

exports.contactForm = [
    body('name', 'Name is required').not().isEmpty(),
    body('email', 'Please include a valid email').isEmail(),
    body('message', 'Message is required').not().isEmpty(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
]