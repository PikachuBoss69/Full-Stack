const express = require('express')
const multer = require('multer')
const authMiddleware = require('../middleware/auth.middleware')
const musicController = require('../controllers/music.controller')

const router = express.Router()

const upload = multer({
    storage: multer.memoryStorage()
})

router.post('/', authMiddleware.authArtist, upload.single("audio"), musicController.createMusic)
router.post('/album', authMiddleware.authArtist, musicController.createAlbum)
router.get('/getmusic',authMiddleware.authUsers,musicController.getMusic)
router.get('/getalbum',authMiddleware.authUsers,musicController.getAlbum)
router.get('/getsongsAlbum',authMiddleware.authUsers,musicController.getSongsByAlbum)

module.exports = router