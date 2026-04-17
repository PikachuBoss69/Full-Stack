const express = require('express')
const mongoose = require('mongoose')
const postModel = require('../model/post.model')
const multer = require('multer')
const UploadFiles = require('../service/cloud.service')

const app = express();
app.use(express.json());

const upload = multer({
     storage: multer.memoryStorage()
});
app.post('/Create_Post',upload.single('image'),async (req, res)=>{
    try{

        const file = req.file;
        const Data = req.body;
        
                if (!file) {
            return res.status(400).json({
                message: "No file uploaded"
            });
        }

        const result = await UploadFiles(file.buffer);
        console.log(result);
        
        const newPost = await postModel.create({
            image: result.url,
            caption: Data.caption,
        });
        
        res.status(200).json({
            message:"Files Uploaded Succcessfully",
            post: newPost
        })
    }
    catch(err){
        res.status(500).json({
            message: "Error",
            error: err.message
        });
    }
})

app.get('/post',async (req, res)=>{
    try{

        const getPost =await postModel.find()
        
        res.status(200).json({
            message:"post Fetched Successfully",
            post: getPost,
        })
    }
    catch(err){
        res.status(500).json({
            message: "Fetching Unseccessful",
            error: err.message
        });
    }
})

app.delete('/post/:id', async (req, res) => {
    try {
        const { id } = req.params
        if (!mongoose.isValidObjectId(id)) {
            return res.status(400).json({ message: 'Invalid post id' })
        }
        const deleted = await postModel.findByIdAndDelete(id)
        if (!deleted) {
            return res.status(404).json({ message: 'Post not found' })
        }
        res.status(200).json({
            message: 'Post deleted successfully',
            id: deleted._id,
        })
    } catch (err) {
        res.status(500).json({
            message: 'Could not delete post',
            error: err.message,
        })
    }
})

module.exports = app