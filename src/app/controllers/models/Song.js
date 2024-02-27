const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator')
const Schema = mongoose.Schema;

mongoose.plugin(slug)
const Song = new Schema({
    title: { type: String },
    singers: { type: Array },
    album: { type: String },
    img: { type: String },
    rank: { type: String },
    songPrefix: { type: String },
    slug: { type: String, slug: 'title', unique: true }
}, {
    timestamps: true,
    collection: 'Songs'
});

module.exports = mongoose.model('Song', Song);