const { Album } = require('../models');

const getAllAlbums = async (req, res, next) => {
  try {
    const albums = await Album.find({});
    res.status(200).json({ albums });
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllAlbums };
