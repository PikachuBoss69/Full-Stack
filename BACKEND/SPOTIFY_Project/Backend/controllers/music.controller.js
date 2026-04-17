const musicModel = require('../models/music.model')
const albumModel = require('../models/album.model')
const {uploadFiles} = require('../services/cloud.service')

async function createMusic(req, res){
    try{

        const { title } = req.body;
        const file = req.file;
        if (!file) {
            return res.status(400).json({
            message: "Audio file is required"
        });
}
        const result =await uploadFiles(file.buffer.toString('base64'));

         const music = await musicModel.create({
        audio: result.url,
        title,
        artist: req.user.id,
    })

    res.status(201).json({
        message: "Music created successfully",
        music: {
            id: music._id,
            audio: music.audio,
            title: music.title,
            artist: music.artist,
        }
    })

    }
    catch(err){
        res.status(401).json({
            message:"Error : ",
            error: err.message
        })
    }
}

async function createAlbum(req, res){
    const {title, musics} = req.body

    const album = await albumModel.create({
        title: title,
        artist: req.user.id,
        music: musics
    })

    res.status(201).json({
        message: "Music created successfully",
        music: {
            id: album._id,
            title: album.title,
            artist: album.artist,
            music:album.music
        }
    })
}

async function getMusic(req, res){
    try{

        const {title, page = 1, limit = 10} = req.query;
        const filter = {}
        
        if(title){
            filter.title = title
    }
    
    const getmusic = await musicModel.find(filter).populate("artist", "username email").limit(parseInt(limit)).skip((page-1)*limit) 
    
    res.status(200).json({
        messgae: "Music fetched Successfully",
        music:getmusic 
    })
    } 
    catch (err) {
    res.status(500).json({
        message: "Error fetching musics",
            error: err.message
        });
    }

}

async function getAlbum(req, res){
    try{

        const {title, page = 1, limit = 10} = req.query;
        const filter = {}
        
        if(title){
        filter.title = title
    }
    
    const getalbum = await albumModel.find(filter).select("title artist").populate("artist", "username email").limit(parseInt(limit)).skip((page-1)*limit) 
    
    res.status(200).json({
        messgae: "album fetched Successfully",
        album:getalbum 
    })
    }
    catch(err){
        res.status(500).json({
            message: "Error fetching albums",
            error: err.message
        });
    }

}
async function getSongsByAlbum(req, res) {
    try {
        const { albumId } = req.params;
        const { page = 1, limit = 10 } = req.query;

        const songs = await musicModel
            .find({ album: albumId })
            .select("title artist uri")
            .populate("artist", "username email")
            .limit(parseInt(limit))
            .skip((page - 1) * limit);

        res.status(200).json({
            message: "Songs fetched successfully",
            songs
        });

    } catch (err) {
        res.status(500).json({
            message: "Error fetching songs",
            error: err.message
        });
    }
}

module.exports = {createMusic, createAlbum, getMusic, getAlbum, getSongsByAlbum}