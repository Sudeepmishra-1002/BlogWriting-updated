// const express = require("express");
// const router = express.Router();
// const Post = require("../models/Post");  // yahi se Post model aayega

// // 20 random posts laane ka route
// router.get("/", async (req, res) => {
//   try {
//     const posts = await Post.aggregate([{ $sample: { size: 20 } }]);
//     res.render("index", { posts }); // ye tumhara views/index.ejs ko posts bhej raha hai
//   } catch (err) {
//     console.error(err);
//     res.render("index", { posts: [] });
//   }
// });

// module.exports = router;



// const mongoose = require('mongoose');

// const postSchema = new mongoose.Schema({
//     username: String,
//     topic_name: String,
//     content: String,
//     image: String,
//     likes: { type: Number, default: 0 },
//     postedAt: { type: String, default: () => new Date().toLocaleTimeString() }
// });

// // YEH LINE SABSE IMPORTANT HAI
// const Post = mongoose.model('Post', postSchema);
// module.exports = Post;





// const mongoose = require("mongoose");

// const postSchema = new mongoose.Schema({
//     username: String,
//     topic_name: String,
//     content: String,
//     image: String,
//     likes: { type: Number, default: 0 },
//     postedAt: { type: String, default: () => new Date().toLocaleDateString() }
// });

// // YEH LINE DHAYAN SE DEKHO: module.exports (s) hona chahiye
// const Post = mongoose.model("Post", postSchema);
// module.exports = Post;





// const mongoose = require("mongoose");

// const postSchema = new mongoose.Schema({
//     username: String,
//     topic_name: String,
//     content: String,
//     image: String,
//     likes: { type: Number, default: 0 },
//     postedAt: { type: String, default: () => new Date().toLocaleDateString() }
// });

// // YEH LINE SABSE IMPORTANT HAI
// const Post = mongoose.model("Post", postSchema);
// module.exports = Post;