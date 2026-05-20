// models/User.js
// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//     username: String,
//     // email: { type: String, required: true, unique: true },
//     password: String
// });

// module.exports = mongoose.model('User', userSchema);


// ---------------------------------------------------------------------------------------


// const userSchema = new mongoose.Schema({
//     username: { type: String, required: true, unique: true },
//     password: { type: String, required: true }
// });

// -------------------------------------------------------------------------------------------

// models/User.js
// const mongoose = require('mongoose');  // ✅ Ye line top pe honi chahiye

// const userSchema = new mongoose.Schema({
//     username: { type: String, required: true, unique: true },
//     password: { type: String, required: true }
// });

// module.exports = mongoose.model('User', userSchema);









// ------------------------------------------------------------------------------------





const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//     username: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true }
// });


const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});


const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  image: String,  // yaha image ka path save hoga
  createdAt: { type: Date, default: Date.now },
  author: String
});

module.exports = mongoose.model('User', userSchema);
