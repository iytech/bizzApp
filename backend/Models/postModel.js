const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        trim: true
    },
    post: {
        type: String
    },
    comment: {
        type: String
    },
    postImage: {
        type: String
    },
    like: {
        type: Number
    },
    share: {
        type: Number
    },
},
    {
        timestamps: true
});

const Post = mongoose.model('Post', postSchema);
module.exports = Post;