const db = require('../../../models');
const Op = db.Sequelize.Op;
const {Admin, Listings, Gallery, Category, City} = db;
const publicController = require("../../public.controller");
const multer = require("multer");
const fs = require('fs');
const path = require('path');
const { listings } = require('../../admin.controller');
const url = require('url');
const AWS = require('aws-sdk');

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION
});


const s3 = new AWS.S3();

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
        // for (let i = 0; i < gallery.length; i++) {
        //     const g = gallery[i].getValues();
        //     g.image = `${process.env.BASE_URL}/listings/${listing.uid}/${g.image}`
        // }
        let location = []
        if(listing.location_id){
            location = await City.findByPk(listing.location_id)
        }
        listing.location_details = location
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
            // for (let i = 0; i < gallery.length; i++) {
            //     const g = gallery[i].getValues();
            //     g.image = `${process.env.BASE_URL}/listings/${listing.uid}/${g.image}`
            // }
            let category = await Category.findByPk(listing.category_id)
            listing.category = category
            let location = []
            if(listing.location_id){
                location = await City.findByPk(listing.location_id)
            }
            listing.location_details = location
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


exports.createFreeListing = async (req, res) => {
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
        // image_logo: body.image_logo,
        // agent_id: body.agent_id, 
        // product_id: body.product_id,
        location_id: body.location_id,
        is_free: 1
    }
    try {
        let listing = await Listings.create(createObj)
        return res.send({
            success: true,
            message: "Free Listing created successfully!",
            data: listing        
        })
    } catch (error) {
        return publicController.errorHandlingFunc(req, res, error.message);
    }
}

exports.updateFreeListing = async (req, res) => {
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
        // rent: body.rent,
        stay_type_id: body.stay_type,
        contact_number: body.contact_number,
        location_id: body.location_id,
        location_id: body.location_id,
        short_description: body.short_description,
        long_description:  body.long_description,
        additional_info: body.additional_info, 
        // image_logo: body.image_logo,
        // agent_id: body.agent_id, 
        // product_id: body.product_id
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
        location_id: body.location_id,
        short_description: body.short_description,
        long_description:  body.long_description,
        additional_info: body.additional_info,
        image_logo: body.image_logo,
        agent_id: body.agent_id, 
        product_id: body.product_id
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
}

exports.updateGallery = async (req, res) => {
    try {
        let id = req.params.id
        let listing = await Listings.findByPk(id)
        if(!listing) {
            return res.send({
                success: false,
                message: "Listing not found"
            })
        }
        const rootDirectory = path.resolve(__dirname);
        let galleryPath = path.resolve(`${rootDirectory}/../../../../public/`)
        await req.files.gallery.map(async (file) => {
            await uploadImageToS3(file, listing, galleryPath)
            .then((imageUrl) => {
                console.log('Image uploaded to S3:', imageUrl);
                Gallery.create({
                    listing_id: listing.id,
                    image: imageUrl
                })
                /**
                 * Remove uploaded file!
                 */
                fs.unlinkSync(file.path)
            })
            .catch((error) => {
                console.log(error)
            });
        })

        return res.send({
           success: true,
           message: 'Gallery Updated successfully!'
        })
    } catch (error) {
        return res.status(500).send({
            success: false,
            error: error.message
        })
    }
}

 /**
 * Remove Image from Gallery
 */
exports.deleteGallery = async (req, res) => {
    try {
        const id = req.params.id
        let gallery = await Gallery.findByPk(id)
        if(!gallery){
            return res.status(404).send({
                success: false,
                message: "Gallery Item not found!"
            })
        }

        let listing = await Listings.findByPk(gallery.listing_id)
        if(!listing){
            return res.status(404).send({
                success: false,
                message: "Listing not found!"
            }) 
        }

        /**
         * Remove from s3 bucket.
         */
        // Parse the URL
        const parsedUrl = url.parse(gallery.image);
        const pathname = parsedUrl.pathname;
        const basename = path.basename(pathname);
        const params = {
            Bucket: process.env.AWS_BUCKET_NAME,
            Key: `listings/${listing.uid}/${basename}`,
        }
        s3.deleteObject(params, (err, data) => {
            if (err) {
                console.error('Error deleting object:', err);
            } else {
                console.log('Object deleted successfully');
            }
        });
        Gallery.destroy({
            where: {
                id: id
            }
        })
        return res.send({
            success: true,
            message: "Gallery item deleted successfully!"
        })
    } catch (error) {
        return publicController.errorHandlingFunc(req, res, error.message);
    }
}


/**
 * AWS Upload image to s3 bucket.
 */
const uploadImageToS3 = async (file, listing, galleryPath) => {
    const params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: `listings/${listing.uid}/${file.filename+path.extname(file.originalname)}`, // Set the S3 object key
        Body: fs.createReadStream(galleryPath+'/'+file.filename), // Use the file buffer as the Body
        ContentType: file.mimetype, // Set the Content-Type based on file type
    };
  
    return new Promise((resolve, reject) => {
      s3.upload(params, (err, data) => {
        if (err) {
            console.log(err)
          reject(err);
        } else {
            console.log(data.Location)
            // Set the object ACL to 'public-read' to make it public
            s3.putObjectAcl({
                Bucket: process.env.AWS_BUCKET_NAME,
                Key: `listings/${listing.uid}/${file.filename+path.extname(file.originalname)}`, // Specify the same key as used for the upload
                ACL: 'public-read',
            }, (aclErr, aclData) => {
                if (aclErr) {
                    console.error('Error setting object ACL:', aclErr);
                } else {
                    console.log('Object ACL set to public-read:', aclData);
                }
            });
          resolve(data.Location); // The URL of the uploaded image in S3
        }
      });
    });
  }

//   const uploadImageToS3Test = async (file, listing, galleryPath) => {
//     const params = {
//         Bucket: process.env.AWS_BUCKET_NAME,
//         Key: `listings/${listing.uid}/${file}`, // Set the S3 object key
//         Body: fs.createReadStream(galleryPath), // Use the file buffer as the Body
//         ContentType: file.mimetype, // Set the Content-Type based on file type
//     };
  
//     return new Promise((resolve, reject) => {
//       s3.upload(params, (err, data) => {
//         if (err) {
//             console.log(err)
//           reject(err);
//         } else {
//             console.log(data.Location)
//             // Set the object ACL to 'public-read' to make it public
//             s3.putObjectAcl({
//                 Bucket: process.env.AWS_BUCKET_NAME,
//                 Key: `listings/${listing.uid}/${file}`, // Specify the same key as used for the upload
//                 ACL: 'public-read',
//             }, (aclErr, aclData) => {
//                 if (aclErr) {
//                     console.error('Error setting object ACL:', aclErr);
//                 } else {
//                     console.log('Object ACL set to public-read:', aclData);
//                 }
//             });
//           resolve(data.Location); // The URL of the uploaded image in S3
//         }
//       });
//     });
//   }

  const removeFilesUploaded = (req) => {

    if(req.files && req.files['gallery']) {
        let docs = req.files['gallery']
        docs.forEach(doc => {
            fs.unlinkSync(doc.path)
        });
    }
}

exports.removeFilesUploaded = (req) => {
    removeFilesUploaded(req)
}

// exports.tests3 = async (req, res) => {
//     const rootDirectory = path.resolve(__dirname);
//     let galleryPath = path.resolve(`${rootDirectory}/../../../../public/listings/`)
//     let listings = await Listings.findAll()
//     await listings.map(async (listing) => {
//         let galleries = await Gallery.findAll({
//             where: {
//                 listing_id: listing.id
//             }
//         })
//         await galleries.map(async (gallery) => {
//             fs.access(`${galleryPath}/${listing.uid}/${gallery.image}`, fs.constants.F_OK, async (err) => {
//                 if (err) {
//                     console.error('File does not exist or is not accessible');
//                 }else{
//                     console.log(`${galleryPath}/${listing.uid}/${gallery.image}`)
//                     await uploadImageToS3Test(gallery.image, listing, `${galleryPath}/${listing.uid}/${gallery.image}`)
//                     .then((imageUrl) => {
//                         console.log('Image uploaded to S3:', imageUrl);
//                         gallery.image = imageUrl
//                         gallery.save()
//                         Gallery.create({
//                             listing_id: listing.id,
//                             image: imageUrl
//                         })
//                         /**
//                          * Remove uploaded file!
//                          */
//                         fs.unlinkSync(`${galleryPath}/${listing.uid}/${gallery.image}`)
//                     })
//                     .catch((error) => {
//                         console.log(error)
//                     });
//                 }
//             });
//         })
//     })
//     return res.send({
//         success: galleryPath
//     })
// }