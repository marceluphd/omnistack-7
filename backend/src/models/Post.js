const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    author: String,
    place: String,
    description: String,
    image: String,
    likes: {
        type: Number,
        default: 0
    },
    hashtags: String,
}, {
        timestamps: true,
    });

module.exports = mongoose.model('Post', PostSchema);
