const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const albumSchema = new Schema({
  title: {
    type: String,
    required: ['title is required'],
  },
});

const Album = model('Album', albumSchema);

module.exports = Album;
