const db = require('../../../models');
const Op = db.Sequelize.Op;
const {Admin, Listings, Gallery, Category, City} = db;
const publicController = require("../../public.controller");
const multer = require("multer");
const fs = require('fs');
const path = require('path');
const { listings } = require('../../admin.controller');
exports.index = async (req, res) => {
    let id = req.params?.id
    let data = []
    if(id) {
        let listing = await Listings.findByPk(id)
        if(!listing){
            let message = "No listing found"
            return res.status(404).send({
                success: false,
                message: message
            })
        }
        listing = listing.getValues()
        listing.features = listing.features?listing.features.split(','):[]
        let gallery = await Gallery.findAll({
            where: {
                listing_id: id
            }
        })
        for (let i = 0; i < gallery.length; i++) {
            const g = gallery[i].getValues();
            g.image = `${process.env.BASE_URL}/listings/${listing.uid}/${g.image}`
        }
        let location = []
        if(listing.location_id){
            location = await City.findByPk(listing.location_id)
        }
        listing.location = location
        listing = {...listing, gallery: gallery}
        data = listing
    }else{
        let listings = await Listings.findAll()
        for (let i = 0; i < listings.length; i++) {
            const listing = listings[i].getValues()
            listing.features = listing.features?listing.features.split(','):[]
            let gallery = await Gallery.findAll({
                where: {
                    listing_id: listing.id
                }
            })
            for (let i = 0; i < gallery.length; i++) {
                const g = gallery[i].getValues();
                g.image = `${process.env.BASE_URL}/listings/${listing.uid}/${g.image}`
            }
            let category = await Category.findByPk(listing.category_id)
            listing.category = category
            let location = []
            if(listing.location_id){
                location = await City.findByPk(listing.location_id)
            }
            listing.location = location
            data.push({...listing, gallery: gallery})
        }
        
    }
    return res.send(data)
}

const checkUid = async () => {
    let uid = await publicController.makeid(8)
    let checkUid = await Listings.findOne({
        where: {
            uid: uid
        }
    })
    if(checkUid){
        uid = await checkUid()
    }
    return uid
}

exports.create = async (req, res) => {
    let body = req.body
    // check category id

    // check stay_type_id

    // check features

    // make object for saving to listings

    // generate UID
    let uid = await checkUid()
    // make logic for checking uid
    let createObj = {
        uid: uid,
        title: body.title,
        city: body.city,
        country: body.country,
        location: body.location,
        video_link: body.video_link,
        category_id: body.category_id,
        features : body.features?.join(','),
        no_of_guests : body.no_of_guests,
        no_of_pets: body.no_of_pets,
        no_of_adults: body.no_of_adults,
        rent: body.rent,
        stay_type: body.stay_type,
        contact_number: body.contact_number,
        lat: body.lat,
        lon: body.lon,
        short_description: body.short_description,
        long_description:  body.long_description,
        additional_info: body.additional_info, 
        image_logo: body.image_logo,
        agent_id: body.agent_id, 
        product_id: body.product_id,
        location_id: body.location_id
    }
    try {
        let listing = await Listings.create(createObj)
        return res.send({
            success: true,
            message: "Listing created successfully!",
            data: listing        
        })
    } catch (error) {
        return publicController.errorHandlingFunc(req, res, error.message);
    }
}

exports.update = async (req, res) => {
    let id = req.params.id
    let body = req.body
    let listing = await Listings.findByPk(id)
    if(!listing) {
        return res.send({
            success: false,
            message: "Listing not found"
        })
    }
    let updateObj = {
        title: body.title,
        city: body.city,
        country: body.country,
        location: body.location,
        video_link: body.video_link,
        category_id: body.category_id,
        description: body.description,
        features : body.features?.join(','),
        no_of_guests : body.no_of_guests,
        no_of_pets: body.no_of_pets,
        no_of_adults: body.no_of_adults,
        rent: body.rent,
        stay_type_id: body.stay_type,
        contact_number: body.contact_number,
        location_id: body.location_id
    }
    try {
        let listing = await Listings.update(updateObj, {
            where: {
                id: id
            }
        })
        return res.send({
            success: true,
            message: "Listing updated successfully!",        
        })
    } catch (error) {
        return publicController.errorHandlingFunc(req, res, error.message);
    }
}

exports.delete = async (req, res) => {
    let id = req.params.id
    let listing = await Listings.findByPk(id)
    if(!listing) {
        return res.send({
            success: false,
            message: "Listing not found"
        })
    }
    try {
       Listings.destroy({
        where: {
            id: id
        }
       })
        return res.send({
            success: true,
            message: "Listing Deleted successfully!",        
        })
    } catch (error) {
        return publicController.errorHandlingFunc(req, res, error.message);
    }
    res.send({
        message: true
    })
}

exports.updateGallery = async (req, res) => {
    let id = req.params.id
    let listing = await Listings.findByPk(id)
    if(!listing) {
        return res.send({
            success: false,
            message: "Listing not found"
        })
    }
    const rootDirectory = path.resolve(__dirname);
    let galleryPath = `${rootDirectory}/../../../../public/listings/${listing.uid}/`
    console.log(galleryPath);

    
    // Check if the directory exists
    fs.access(galleryPath, fs.constants.F_OK, async (err) => {
        if (err) {
            // Create the directory
            fs.mkdir(galleryPath, { recursive: true }, (err) => {
                if (err) {
                    console.error(`Error creating directory: ${err}`);
                } else {
                    const storageGallery =   multer.diskStorage({  
                        destination:  (req, file, callback) => {  
                          callback(null, galleryPath);
                        },
                        filename: (req, file, callback) => {
                          callback(null, `${Date.now()}-${file.originalname}`);  
                        }
                    });
                    var uploadGallery = multer({ storage : storageGallery}).array('gallery');
                    let galleryMaxCount = 20;
                    uploadGallery(req,res,async (err) => {
                        if(req.files && req.files.length > galleryMaxCount){
                            return res.status(203).send({
                                success: false,
                                message: `Max gallery upload limit is ${galleryMaxCount}`
                            });
                        }
                        if(!req.files){
                            return res.status(403).send({
                                success: false,
                                message: "Min 1 gallery image file is required!"
                            })
                        } 
                        var invalidFileCollection = false;
                        req.files.forEach(file => {
                            if(file.mimetype){
                                const arr = file.mimetype.split('/');
                                if(arr[0] !== 'image'){
                                    invalidFileCollection = true;
                                }
                            }
                        });
                        if(invalidFileCollection){
                            return res.status(203).send({
                                success: false,
                                message: 'Invalid filetype. Only images are allowed'
                            });
                        }
                        if(err) {
                            return res.status(500).send({
                                status: false,
                                message: "Error uploading Gallery.",
                                err: err
                            });  
                        }
                        // Upload gallery one by one
                        const galleryFiles = [];
                        req.files.forEach(async (file) => {
                            galleryFiles.push(file.filename);
                        });
                        galleryFiles.map(g => {
                            Gallery.create({
                                listing_id: listing.id,
                                image: g
                            })
                        })
                
                        // let resp = await pocRegistration.update({file: galleryFiles.join(',')}, {
                        //     where: {
                        //         id: req.params.id
                        //     }
                        // });
                        // if(resp) {
                        //     // Delete old files.
                        //     const oldGallery = user.file.split(',');
                        //     oldGallery.forEach(old => {
                        //         fs.unlink(`${galleryPath}${old}`, function(err) {
                        //             if(err && err.code == 'ENOENT') {
                        //                 console.log("File doesn't exist, won't remove it.");
                        //             } else if (err) {
                        //                 console.error("Error occurred while trying to remove file");
                        //             } else {
                        //                 console.info(`removed`);
                        //             }
                        //         });
                        //     })
                        //     return res.status(200).send({
                        //         status: true,
                        //         message: "Gallery updated successfully!"
                        //     });  
                        // }
                        return res.status(200).send({
                            success: true,
                            message: "Gallery updated successfully!"
                        });
                    });
                }
            });
        } else {
            const storageGallery =   multer.diskStorage({  
                destination:  (req, file, callback) => {  
                  callback(null, galleryPath);
                },
                filename: (req, file, callback) => {
                  callback(null, `${Date.now()}-${file.originalname}`);  
                }
            });
            var uploadGallery = multer({ storage : storageGallery}).array('gallery');
            let galleryMaxCount = 20;
            uploadGallery(req,res,async (err) => {
                if(req.files && req.files.length > galleryMaxCount){
                    return res.status(203).send({
                        success: false,
                        message: `Max gallery upload limit is ${galleryMaxCount}`
                    });
                }
                if(!req.files){
                    return res.status(403).send({
                        success: false,
                        message: "Min 1 gallery image file is required!"
                    })
                } 
                var invalidFileCollection = false;
                req.files.forEach(file => {
                    if(file.mimetype){
                        const arr = file.mimetype.split('/');
                        if(arr[0] !== 'image'){
                            invalidFileCollection = true;
                        }
                    }
                });
                if(invalidFileCollection){
                    return res.status(203).send({
                        success: false,
                        message: 'Invalid filetype. Only images are allowed'
                    });
                }
                if(err) {
                    return res.status(500).send({
                        status: false,
                        message: "Error uploading Gallery.",
                        err: err
                    });  
                }
                // Upload gallery one by one
                const galleryFiles = [];
                req.files.forEach(async (file) => {
                    galleryFiles.push(file.filename);
                });
                galleryFiles.map(g => {
                    Gallery.create({
                        listing_id: listing.id,
                        image: g
                    })
                })
        
                // let resp = await pocRegistration.update({file: galleryFiles.join(',')}, {
                //     where: {
                //         id: req.params.id
                //     }
                // });
                // if(resp) {
                //     // Delete old files.
                //     const oldGallery = user.file.split(',');
                //     oldGallery.forEach(old => {
                //         fs.unlink(`${galleryPath}${old}`, function(err) {
                //             if(err && err.code == 'ENOENT') {
                //                 console.log("File doesn't exist, won't remove it.");
                //             } else if (err) {
                //                 console.error("Error occurred while trying to remove file");
                //             } else {
                //                 console.info(`removed`);
                //             }
                //         });
                //     })
                //     return res.status(200).send({
                //         status: true,
                //         message: "Gallery updated successfully!"
                //     });  
                // }
                return res.status(200).send({
                    success: true,
                    message: "Gallery updated successfully!"
                });
            });
        }
    });
}