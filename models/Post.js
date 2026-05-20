// // models/Post.js
// const mongoose = require('mongoose');

// const PostSchema = new mongoose.Schema({
//   title: { type: String },
//   content: { type: String },
//   author: {
//     _id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
//     username: { type: String }
//   },
//   categories: [String],
//   tags: [String],
//   likes: { type: Number, default: 0 },
//   coverImage: { type: String },
//   createdAt: { type: Date, default: Date.now },
//   updatedAt: { type: Date, default: Date.now },
//   isSeed: { type: Boolean, default: false }
// });

// module.exports = mongoose.model('Post', PostSchema);




































const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    username: String,
    topic_name: String,
    content: String,
    image: String,
    likes: { type: Number, default: 0 },
    // postedAt: { type: String, default: () => new Date().toLocaleDateString() }
    postedAt: { type: Date, default: Date.now }
});

const Post = mongoose.model("Post", postSchema);
module.exports = Post;
