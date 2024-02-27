const express = require('express');
const router = express.Router();

const songController = require('../app/controllers/SongController');

router.get('/getSong', songController.getSong)
router.get('/getSongInfo', songController.getSongInfo)
router.get('/searchSong', songController.searchSong)

module.exports = router;
