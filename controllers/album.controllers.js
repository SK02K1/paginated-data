const { Album } = require('../models');

const getAllAlbums = async (req, res, next) => {
  try {
    const page = req.query.page;
    let albums = await Album.find({});

    const limit = 5;
    const count = albums.length;
    const pages = Math.ceil(count / limit);

    let info = { count, pages };

    if (page !== undefined && Number(page) >= 1 && Number(page) <= pages) {
      albums = await Album.find({})
        .skip((page - 1) * limit)
        .limit(limit);
      info = {
        ...info,
        prev:
          page === '1'
            ? null
            : `http://localhost:8080/albums/?page=${Number(page) - 1}`,
        next:
          Number(page) === pages
            ? null
            : `http://localhost:8080/albums/?page=${Number(page) + 1}`,
      };

      return res.status(200).json({ info, albums });
    }

    if (Number(page) > pages) {
      return res.status(404).json({
        success: false,
        error: `wrong page query param specified, must be less than or equal to ${pages}`,
      });
    }

    res.status(200).json({ info, albums });
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllAlbums };
