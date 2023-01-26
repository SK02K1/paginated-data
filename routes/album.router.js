const express = require('express');
const { getAllAlbums } = require('../controllers');

const router = express.Router();

router.route('/').get(getAllAlbums);

module.exports = router;
