const db = require('../../../models');
const Op = db.Sequelize.Op;
const {Admin, Blogs} = db;
const publicController = require("../../public.controller");
const multer = require("multer");
const fs = require('fs');
const path = require('path');
exports.index = async (req, res) => {
    let id = req.params?.id
    let data = []
    if(id) {
        let d = await Blogs.findByPk(id)
        if(!d){
            let message = "No Blog found"
            return res.status(404).send({
                success: false,
                message: message
            })
        }
        data = d.getValues()
        data.image = data.image&&`${process.env.BASE_URL}/blogs/${data.image}`
    }else{
        data = await Blogs.findAll()
        for (let i = 0; i < data.length; i++) {
            const d = data[i].getValues()
            d.image = d.image&&`${process.env.BASE_URL}/blogs/${d.image}`
        }
    }
    return res.send(data)
}

exports.create = async (req, res) => {
    let body = req.body
    // make logic for checking uid
    let createObj = {
        title: body.title,
        video_link: body.video_link,
        description: body.description
    }
    try {
        let Blog = await Blogs.create(createObj)
        return res.send({
            success: true,
            message: "Blog created successfully!",
            data: Blog
        })
    } catch (error) {
        return publicController.errorHandlingFunc(req, res, error.message);
    }
}

exports.update = async (req, res) => {
    let id = req.params.id
    let body = req.body
    let Blog = await Blogs.findByPk(id)
    if(!Blog) {
        return res.send({
            success: false,
            message: "Blog not found"
        })
    }
    let updateObj = {
        title: body.title,
        video_link: body.video_link,
        description: body.description,
        // updated_at: new Date().toISOString()
    }
    try {
        let Blog = await Blogs.update(updateObj, {
            where: {
                id: id
            }
        })
        return res.send({
            success: true,
            message: "Blog updated successfully!",        
        })
    } catch (error) {
        return publicController.errorHandlingFunc(req, res, error.message);
    }
}

exports.delete = async (req, res) => {
    let id = req.params.id
    let Blog = await Blogs.findByPk(id)
    if(!Blog) {
        return res.send({
            success: false,
            message: "Blog not found"
        })
    }
    try {
       Blogs.destroy({
        where: {
            id: id
        }
       })
        return res.send({
            success: true,
            message: "Blog Deleted successfully!",        
        })
    } catch (error) {
        return publicController.errorHandlingFunc(req, res, error.message);
    }
}

exports.updateImage = async (req, res) => {

    let id = req.params.id
    let blog = await Blogs.findByPk(id)
    if(!blog) {
        return res.send({
            success: false,
            message: "Blog not found"
        })
    }

    const rootDirectory = path.resolve(__dirname);
    console.log(rootDirectory);
    let logosPath = `${rootDirectory}/../../../../public/blogs/`

    const storageLogo =   multer.diskStorage({  
        destination:  (req, file, callback) => {  
          callback(null, logosPath);  
        },
        filename: (req, file, callback) => {
          callback(null, `${Date.now()}-${file.originalname}`);  
        }
    });
    var uploadLogo = multer({ storage : storageLogo}).single('image');
      
    uploadLogo(req,res,async (err) => {
        if(!req.file){
            return res.status(403).send({
                success: false,
                message: "No file selected."
            })
        }else if(req.file.mimetype){
            const arr = req.file.mimetype.split('/');
            if(arr[0] !== 'image'){
                return res.status(203).send({
                    success: false,
                    message: 'Invalid filetype. Only images are allowed'
                });
            }
        }
        if(err) {
            return res.status(500).send({
                status: false,
                message: "Error uploading Logo."
            });  
        }
        let resp = await Blogs.update({image: req.file.filename}, {
            where: {
                id: id
            }
        });
        if(resp) {
            // Delete old logo.
            if(blog.image){
                fs.unlink(`${logosPath}${blog.image}`, function(err) {
                    if(err && err.code == 'ENOENT') {
                        console.log("File doesn't exist, won't remove it.");
                    } else if (err) {
                        console.error("Error occurred while trying to remove file");
                    } else {
                        console.info(`removed`);
                    }
                });
            }
            return res.status(200).send({
                status: true,
                message: "Blog cover updated successfully!",
                image: req.file.filename&&`${process.env.BASE_URL}/blogs/${req.file.filename}`
            });  
        }
        return res.status(500).send({
            success: false,
            message: "Error while updating profile picture."
        });
    });  
}