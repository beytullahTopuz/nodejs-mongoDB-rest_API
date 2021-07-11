const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    post_user_name: {
        type: String,
        required: true
    },
    post_user_blood_type: {
        type: String,
        required: true
    },
    post_user_age: {
        type: String,
        required: true
    },
    post_location: {
        type: String,
        required: true
    },
    post_detail: {
        type: String,
        required: true
    },
    
},{ timestamps: true });

PostSchema.methods.toJSON = function () {
    const post = this.toObject();
    delete post.createdAt;
    delete post.updatedAt;
    delete post.__v;

    return post;
}

module.exports = mongoose.model('Post', PostSchema);