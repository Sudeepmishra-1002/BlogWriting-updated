// const express=require("express");
// const app=express();
// const port=3030;
// const path=require("path");

// app.use(express.urlencoded({extended: true}));//taki website express js ko samjh pae

// app.set("view engine", "ejs");
// app.set("views", path.json(__dirname, "views"));

// app.set(express.static("views", path.json(__dirname, "views")));

// app.get("/", (req,res)=>{
//     res.send("serving working well!");  // get request bhejne ke lia 
// });

// app.listen(port,()=>{
//     console.log("listening to port : 3030");  //hme pte chle ki request gyi h 
// });




// -------------------------------------------------------------------------------------------------------







// Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned


// const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/blogDB', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
// .then(() => console.log('✅ MongoDB connected'))
// .catch(err => console.error('❌ MongoDB connection error:', err));
// const User = require('./models/User');

// const express = require("express");
// const app = express();
// const port = 3030;
// const path = require("path");
// const { v4: uuidv4 } = require('uuid');// random id generate krne ke lia 
// // uuidv4(); //
// const methodOverride = require("method-override");




// //ye sirf cache clear krne ke lia 

// app.use((req, res, next) => {
//     res.set("Cache-Control", "no-store");
//     next();
// });


// // Taaki website form-data samajh paaye
// app.use(express.urlencoded({ extended: true }));
// app.use(methodOverride('_method'));

// // EJS set karna as view engine
// app.set("view engine", "ejs");

// // ✅ Correct: views folder ka path set
// app.set("views", path.join(__dirname, "views"));
// // app.set("views", path.json(__dirname, "views"));

//  let posts=[
//     {   
//         // id:"1a", // to get one post
//         id:uuidv4(),//for random id 
//         username:"harry_potter",
//         topic_name:"topic",
//         content:"how beautiful are the stars",
//     },
//     {   
//         // id:"2b",
//         id:uuidv4(),
//         username:"hemoine_granger",
//         topic_name:"curious",
//         content:"how the star were made?",
//     },
//     {   
//         // id:"3c",
//         id:uuidv4(),
//         username:"Ron_weasly",
//         topic_name:"food",
//         content:"can we eat this delicious food before the end of this night",
//     },
//  ];

// // ✅ Correct: serve static files (like CSS) from public folder
// app.use(express.static(path.join(__dirname, "public")));
// // app.set(express.static("views", path.json(__dirname, "views")));

// app.get("/posts", (req, res) => {
//     res.render("index.ejs",{ posts }); // GET request test
// });
// app.get("/posts/new", (req, res) => {
//     res.render("new.ejs"); // GET request test for new post 
// });
// app.post("/posts",(req,res)=>{
//     let { username,topic_name,content}=req.body;
//     let id=uuidv4();
//     // console.log(req.body);
//     posts.push({id, username,topic_name,content});
//     // res.send("post request working");    // new post(content) ko post krne ke lia 
//     res.redirect("/posts");
// });

// app.get("/posts/:id",(req,res)=>{
//     let {id}=req.params;
//     // console.log(id);
//     let post=posts.find((p)=>id===p.id);//  isse hme terminal mai post show hoga
//     // console.log(post);
//     // res.send("request working");
//     res.render("show.ejs",{post});
// });
// // Optional: if you want posts page
// // const posts = [
// //     { id: 1, title: "Binary Tree", content: "Use DFS for traversal" },
// //     { id: 2, title: "DP on Strings", content: "Try memoization" },
// // ];

// // app.get("/posts", (req, res) => {
// //     res.render("index", { posts });
// // });

// // app.get("/posts/:id", (req, res) => {
// //     const post = posts.find(p => p.id == req.params.id);
// //     if (post) {
// //         res.render("show", { post });
// //     } else {
// //         res.send("Post not found");
// //     }
// // });

// app.patch("/posts/:id",(req,res)=>{
//     let { id }=req.params;
//     let newContent=req.body.content;//content terminal mai print krane ke lia 
//     // console.log(id);
//     // console.log(newContent);
//     let post=posts.find((p)=>id===p.id);//  isse post find krenge 
//     post.content=newContent;
//     console.log(post);
//     // res.send("patch request working");
//     res.redirect("/posts");
// });

// app.get("/posts/:id/edit",(req,res)=>{  //post edit krne ke lia 
//     let {id }=req.params;
//     let post=posts.find((p)=>id===p.id);
//     res.render("edit.ejs");
// })




// // Signup GET page
// app.get("/signup", (req, res) => {
//     res.render("signup.ejs");
// });

// // Signup POST (basic redirect for now)
// // app.post("/signup", (req, res) => {
// //     const { username, password } = req.body;
// //     console.log("New signup:", username, password); // optional: save to array/file/db
// //     res.redirect("/posts"); // redirect to home after signup
// // });

// app.get('/login', (req, res) => {
//     res.render('login', { error: null });  // make sure login.ejs exists
// });

// const bcrypt = require('bcrypt');

// app.post('/login', async (req, res) => {
//     // const { email, password } = req.body;
//     const { username, password } = req.body;
    
//     try {
//         // const user = await User.findOne({ email });
//         const user = await User.findOne({ username });
//         if (!user) {
//             return res.render('login', { error: 'User not found' });
//         }

//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) {
//             return res.render('login', { error: 'Incorrect password' });
//         }

//         // If login successful
//         // req.session.userId = user._id; // only if using sessions
//         res.redirect('/home');
//     } catch (err) {
//         console.error(err);
//         res.render('login', { error: 'Something went wrong' });
//     }
// });


// app.post('/signup', async (req, res) => {
//     const { username, email, password } = req.body;
//     console.log("Received signup form:", username, email); // ✅ check input

//     try {
//         const hashedPassword = await bcrypt.hash(password, 10);
//         console.log("Password hashed");

//         const user = new User({ username, email, password: hashedPassword });
//         await user.save();
//         console.log("User saved to DB");

//         res.redirect('/login');
//     } catch (err) {
//         console.error("Signup failed:", err);  // 👈 Yeh print hoga to error pakka hai
//         res.render('signup', { error: "Signup failed" });
//     }
// });

// app.get("/home", (req, res) => {
//     res.send("Welcome to Home Page! You are now logged in.");
// });





// app.listen(port, () => {
//     console.log("listening to port : 3030");
// });







// ----------------------------------------------------------------------



















// const mongoose = require('mongoose');
// const express = require("express");
// const app = express();
// const port = 3030;
// const path = require("path");
// const { v4: uuidv4 } = require('uuid');
// const methodOverride = require("method-override");
// const bcrypt = require('bcrypt');
// const User = require('./models/User');

// // Connect to MongoDB
// mongoose.connect('mongodb://127.0.0.1:27017/blogDB', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
// .then(() => console.log('✅ MongoDB connected'))
// .catch(err => console.error('❌ MongoDB connection error:', err));

// // Middleware
// app.use((req, res, next) => {
//     res.set("Cache-Control", "no-store");
//     next();
// });

// app.use(express.urlencoded({ extended: true }));
// app.use(methodOverride('_method'));
// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));
// app.use(express.static(path.join(__dirname, "public")));

// // Sample Posts
// let posts = [
//     {
//         id: uuidv4(),
//         username: "harry_potter",
//         topic_name: "topic",
//         content: "how beautiful are the stars",
//     },
//     {
//         id: uuidv4(),
//         username: "hemoine_granger",
//         topic_name: "curious",
//         content: "how the stars were made?",
//     },
//     {
//         id: uuidv4(),
//         username: "Ron_weasly",
//         topic_name: "food",
//         content: "can we eat this delicious food before the end of this night",
//     },
// ];

// // Routes
// app.get("/posts", (req, res) => {
//     res.render("index.ejs", { posts });
// });

// app.get("/posts/new", (req, res) => {
//     res.render("new.ejs");
// });

// app.post("/posts", (req, res) => {
//     let { username, topic_name, content } = req.body;
//     let id = uuidv4();
//     posts.push({ id, username, topic_name, content });
//     res.redirect("/posts");
// });

// app.get("/posts/:id", (req, res) => {
//     let { id } = req.params;
//     let post = posts.find((p) => id === p.id);
//     res.render("show.ejs", { post });
// });

// app.get("/posts/:id/edit", (req, res) => {
//     let { id } = req.params;
//     let post = posts.find((p) => id === p.id);
//     res.render("edit.ejs", { post });
// });

// app.patch("/posts/:id", (req, res) => {
//     let { id } = req.params;
//     let newContent = req.body.content;
//     let post = posts.find((p) => id === p.id);
//     post.content = newContent;
//     res.redirect("/posts");
// });

// // Signup
// app.get("/signup", (req, res) => {
//     res.render("signup.ejs");
// });

// app.post("/signup", async (req, res) => {
//     const { username, password } = req.body;
//     console.log("Received signup form:", username);

//     try {
//         const hashedPassword = await bcrypt.hash(password, 10);
//         const user = new User({ username, password: hashedPassword });
//         await user.save();
//         console.log("User saved to DB");
//         res.redirect("/login");
//     } catch (err) {
//         console.error("Signup failed:", err);
//         res.render("signup", { error: "Signup failed" });
//     }
// });

// // Login
// app.get("/login", (req, res) => {
//     res.render("login", { error: null });
// });

// app.post("/login", async (req, res) => {
//     const { username, password } = req.body;

//     try {
//         const user = await User.findOne({ username });
//         if (!user) {
//             return res.render("login", { error: "User not found" });
//         }

//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) {
//             return res.render("login", { error: "Incorrect password" });
//         }

//         res.redirect("/home");
//     } catch (err) {
//         console.error(err);
//         res.render("login", { error: "Something went wrong" });
//     }
// });

// // Home Page
// app.get("/home", (req, res) => {
//     res.send("Welcome to Home Page! You are now logged in.");
// });

// app.listen(port, () => {
//     console.log("listening to port : 3030");
// });










// ------------------------------------------------------------------------------------








// const path = require("path");

// Storage config
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "public/uploads/"); // images will go inside public/uploads
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + path.extname(file.originalname)); // unique name
//   }
// });

// const upload = multer({ storage: storage });



// // index.js
// const mongoose = require('mongoose');
// const multer = require("multer");
// const express = require("express");
// const app = express();
// const port = 3030;
// const path = require("path");
// const { v4: uuidv4 } = require('uuid');
// const methodOverride = require("method-override");
// const bcrypt = require('bcrypt');
// const User = require('./models/User');

// mongoose.connect('mongodb://127.0.0.1:27017/blogDB', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
// .then(() => console.log('✅ MongoDB connected'))
// .catch(err => console.error('❌ MongoDB connection error:', err));

// app.use((req, res, next) => {
//     res.set("Cache-Control", "no-store");
//     next();
// });

// app.use(express.urlencoded({ extended: true }));
// app.use(methodOverride('_method'));
// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));
// app.use(express.static(path.join(__dirname, "public")));
// app.use(express.static("public"));


// let posts = [
//     {
//         id: uuidv4(),
//         username: "harry_potter",
//         topic_name: "topic",
//         content: "how beautiful are the stars",
//     },
//     {
//         id: uuidv4(),
//         username: "hemoine_granger",
//         topic_name: "curious",
//         content: "how the stars were made?",
//     },
//     {
//         id: uuidv4(),
//         username: "Ron_weasly",
//         topic_name: "food",
//         content: "can we eat this delicious food before the end of this night",
//     },
// ];

// app.get("/posts", (req, res) => {
//     res.render("index.ejs", { posts });
// });

// app.get("/posts/new", (req, res) => {
//     res.render("new.ejs");
// });

// app.post("/posts", (req, res) => {
//     let { username, topic_name, content } = req.body;
//     let id = uuidv4();
//     posts.push({ id, username, topic_name, content });
//     res.redirect("/posts");
// });

// app.get("/posts/:id", (req, res) => {
//     let { id } = req.params;
//     let post = posts.find((p) => id === p.id);
//     res.render("show.ejs", { post });
// });

// app.get("/posts/:id/edit", (req, res) => {
//     let { id } = req.params;
//     let post = posts.find((p) => id === p.id);
//     res.render("edit.ejs", { post });
// });

// app.patch("/posts/:id", (req, res) => {
//     let { id } = req.params;
//     let newContent = req.body.content;
//     let post = posts.find((p) => id === p.id);
//     post.content = newContent;
//     res.redirect("/posts");
// });

// app.get("/signup", (req, res) => {
//     res.render("signup.ejs", { error: null });
// });

// // app.post("/signup", async (req, res) => {
// //     const { username, email, password } = req.body;
// //     console.log("Received signup form:", username, email);

// //     try {
// //         const hashedPassword = await bcrypt.hash(password, 10);
// //         const user = new User({ username, email, password: hashedPassword });
// //         await user.save();
// //         console.log("User saved to DB");
// //         res.redirect("/login");
// //     } catch (err) {
// //         console.error("Signup failed:", err);
// //         res.render("signup", { error: "Signup failed. Email may already exist." });
// //     }
// // });/


// // Signup route (index.js)
// app.post("/signup", async (req, res) => {
//     const { email, password } = req.body;
//     console.log("Received signup form:", email);

//     try {
//         const hashedPassword = await bcrypt.hash(password, 10);
//         const user = new User({ email, password: hashedPassword });
//         await user.save();
//         console.log("User saved to DB");
//         res.redirect("/login");
//     } catch (err) {
//         console.error("Signup failed:", err);
//         res.render("signup", { error: "Signup failed. Email may already exist." });
//     }
// });


// app.get("/login", (req, res) => {
//     res.render("login", { error: null });
// });

// app.post("/login", async (req, res) => {
//     const { email, password } = req.body;

//     try {
//         const user = await User.findOne({ email });
//         if (!user) {
//             return res.render("login", { error: "User not found" });
//         }

//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) {
//             return res.render("login", { error: "Incorrect password" });
//         }

//         res.redirect("/home");
//     } catch (err) {
//         console.error(err);
//         res.render("login", { error: "Something went wrong" });
//     }
// });

// // app.get("/home", (req, res) => {
// //     res.send("Welcome to Home Page! You are now logged in.");
// // });

// app.get("/home", (req, res) => {
//     res.redirect("/posts");
// });


// app.listen(port, () => {
//     console.log("listening to port : 3030");
// });








// ---------------------------------UPDATED CODE 3/10/2025 ----------------------------------------
















// const multer = require("multer");
// const path = require("path");

// Storage config


// const upload = multer({ storage: storage });




// const multer = require("multer");
// const upload = multer({ dest: "public/uploads/" });

// app.post("/posts", upload.single("image"), async (req, res) => {
//   const { title, content } = req.body;
//   const imagePath = req.file ? `/uploads/${req.file.filename}` : null;

//   const newPost = new Post({
//     title,
//     content,
//     image: imagePath,
//     author: req.session.userEmail
//   });

//   await newPost.save();
//   res.redirect("/posts");
// });

























//-----------------------------UPDATED CODE 03/10/2025--------------------------------------------






























// ------------------- IMPORTS -------------------
// const express = require("express");
// //updated on 30/11/25-----------------------------------------------------//
// // const postsRouter = require("./routes/posts");
// //-----------------------------------------------------------------------------------//
// const mongoose = require('mongoose');
// const path = require("path");
// const multer = require("multer");
// const { v4: uuidv4 } = require('uuid');
// const methodOverride = require("method-override");
// const bcrypt = require('bcrypt');
// const User = require('./models/User');
// // If using Post model for DB posts, uncomment:
// // const Post = require('./models/Post');


// const app = express();
// const port = 3030;

// // ------------------- MONGODB CONNECTION -------------------
// mongoose.connect('mongodb://127.0.0.1:27017/blogDB', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
// .then(() => console.log('✅ MongoDB connected'))
// .catch(err => console.error('❌ MongoDB connection error:', err));

// // ------------------- MIDDLEWARE -------------------
// app.use((req, res, next) => {
//     res.set("Cache-Control", "no-store");
//     next();
// });

// app.use(express.urlencoded({ extended: true }));
// app.use(methodOverride('_method'));
// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));
// app.use(express.static(path.join(__dirname, "public")));

// //updated on 30/11/25 -=--------------------------------------------------//
// // app.use("/posts", postsRouter);
// //-------------------------------------------------------------------------//

// // ------------------- MULTER CONFIG -------------------
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, "public/uploads/");
//     },
//     filename: function (req, file, cb) {
//         cb(null, Date.now() + path.extname(file.originalname));
//     }
// });
// const upload = multer({ storage: storage });

// // ------------------- POSTS ARRAY -------------------
// let posts = [
//     {
//         id: uuidv4(),
//         username: "harry_potter",
//         topic_name: "topic",
//         content: "how beautiful are the stars",
//     },
//     {
//         id: uuidv4(),
//         username: "hemoine_granger",
//         topic_name: "curious",
//         content: "how the stars were made?",
//     },
//     {
//         id: uuidv4(),
//         username: "Ron_weasly",
//         topic_name: "food",
//         content: "can we eat this delicious food before the end of this night",
//     },
// ];

// // --- DUMMY DATA GENERATOR (50 Posts ek saath add karne ke liye) ---

// const dummyUsers = ["CodeMaster", "WebNinja", "Dev_Priya", "Rahul123", "TechGuru", "SystemHacker", "CoffeeCoder", "ByteMe"];
// const dummyTopics = ["JavaScript Help", "Python vs Java", "My Interview Experience", "React Tips", "Monday Motivation", "Bug Fixing", "Career Advice"];
// const dummyContents = [
//     "Aaj maine ek naya bug fix kiya, bohot maza aaya!",
//     "Kya koi bata sakta hai ki Node.js mein ye error kyu aa raha hai?",
//     "LeetCode ka aaj ka question kaafi tough tha.",
//     "Web Development seekhna start kiya hai, any tips for beginners?",
//     "Bootstrap use karna kaafi aasaan hai design ke liye.",
//     "Raat bhar coding karne ka alag hi maza hai.",
//     "Finally got placed in my dream company! Thanks everyone."
// ];

// // 50 posts generate karne wala loop
// // index.js mein loop wala part replace karein:

// for (let i = 0; i < 50; i++) {
//     posts.push({
//         id: uuidv4(),
//         username: dummyUsers[Math.floor(Math.random() * dummyUsers.length)],
//         topic_name: dummyTopics[Math.floor(Math.random() * dummyTopics.length)],
//         content: dummyContents[Math.floor(Math.random() * dummyContents.length)], 
//         image: null,
//         // YEH DO LINE ADD KARO:
//         likes: Math.floor(Math.random() * 500), // 0 se 500 ke beech random likes
//         postedAt: Math.floor(Math.random() * 23) + 1 + "h ago" // 1h se 24h ago random time
//     });
// }
// // ------------------------------------------------------------------

// // ------------------- ROUTES -------------------

// // Home / Posts list
// // app.get("/posts", (req, res) => {
// //     res.render("index.ejs", { posts });
// // });

// // Search Feature Logic
// app.get("/posts", (req, res) => {
//     const { search } = req.query; // URL se search word nikala (e.g., ?search=coding)
    
//     let data = posts; // Default: Saare posts dikhao
    
//     if (search) {
//         // Agar search word hai, to filter karo
//         data = posts.filter((post) => 
//             post.content.toLowerCase().includes(search.toLowerCase()) || 
//             post.username.toLowerCase().includes(search.toLowerCase()) ||
//             post.topic_name.toLowerCase().includes(search.toLowerCase())
//         );
//     }
    
//     // Filtered data bhej rahe hain frontend ko
//     res.render("index.ejs", { posts: data });
// });

// // New post form
// app.get("/posts/new", (req, res) => {
//     res.render("new.ejs");
// });

// // Create new post (with optional image)
// app.post("/posts", upload.single("image"), (req, res) => {
//     const { username, topic_name, content } = req.body;
//     const imagePath = req.file ? `/uploads/${req.file.filename}` : null;

//     posts.push({
//         id: uuidv4(),
//         username,
//         topic_name,
//         content,
//         image: imagePath
//     });

//     res.redirect("/posts");
// });

// // Show single post
// app.get("/posts/:id", (req, res) => {
//     const { id } = req.params;
//     const post = posts.find((p) => id === p.id);
//     res.render("show.ejs", { post });
// });

// // Edit post form
// app.get("/posts/:id/edit", (req, res) => {
//     const { id } = req.params;
//     const post = posts.find((p) => id === p.id);
//     res.render("edit.ejs", { post });
// });

// // Update post content
// app.patch("/posts/:id", (req, res) => {
//     const { id } = req.params;
//     const newContent = req.body.content;
//     const post = posts.find((p) => id === p.id);
//     post.content = newContent;
//     res.redirect("/posts");
// });

// // ------------------- SIGNUP / LOGIN -------------------

// // Signup page
// app.get("/signup", (req, res) => {
//     res.render("signup.ejs", { error: null });
// });

// // Signup handler
// app.post("/signup", async (req, res) => {
//     const { email, password } = req.body;
//     console.log("Received signup form:", email);

//     try {
//         const hashedPassword = await bcrypt.hash(password, 10);
//         const user = new User({ email, password: hashedPassword });
//         await user.save();
//         console.log("User saved to DB");
//         res.redirect("/login");
//     } catch (err) {
//         console.error("Signup failed:", err);
//         res.render("signup", { error: "Signup failed. Email may already exist." });
//     }
// });

// // Login page
// app.get("/login", (req, res) => {
//     res.render("login", { error: null });
// });

// // Login handler
// app.post("/login", async (req, res) => {
//     const { email, password } = req.body;

//     try {
//         const user = await User.findOne({ email });
//         if (!user) {
//             return res.render("login", { error: "User not found" });
//         }

//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) {
//             return res.render("login", { error: "Incorrect password" });
//         }

//         res.redirect("/home");
//     } catch (err) {
//         console.error(err);
//         res.render("login", { error: "Something went wrong" });
//     }
// });

// // Home redirect
// app.get("/home", (req, res) => {
//     res.redirect("/posts");
// });

// // ------------------- START SERVER -------------------
// app.listen(port, () => {
//     console.log(`✅ Server listening on port ${port}`);
// });





















// const express = require("express");
// const app = express();
// const port = 3030;
// const path = require("path");
// const methodOverride = require("method-override");
// const mongoose = require('mongoose');
// const multer = require("multer");
// const { format } = require('timeago.js'); // 1. Import kiya

// // 1. Post Model Import (Ab ye sahi chalega!)
// const Post = require('./models/Post'); 

// // 2. MONGODB CONNECTION
// mongoose.connect('mongodb://127.0.0.1:27017/blogDB')
// .then(() => console.log('✅ MongoDB Connected Successfully'))
// .catch(err => console.error('❌ MongoDB Connection Error:', err));

// // 3. MIDDLEWARE
// app.use(express.urlencoded({ extended: true }));
// app.use(methodOverride('_method'));
// app.use(express.static(path.join(__dirname, "public")));
// // 2. Isse poori website par 'format' function available ho jayega
// app.locals.format = format;
// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));

// // Multer Setup (Image Upload ke liye)
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => cb(null, "public/uploads/"),
//     filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
// });
// const upload = multer({ storage: storage });

// // ------------------- ROUTES -------------------

// // Index Route - Database se Posts laayega
// app.get("/posts", async (req, res) => {
//     try {
//         const { search } = req.query;
//         let query = {};
        
//         // Search Logic
//         if (search) {
//             query = {
//                 $or: [
//                     { username: { $regex: search, $options: "i" } },
//                     { content: { $regex: search, $options: "i" } },
//                     { topic_name: { $regex: search, $options: "i" } }
//                 ]
//             };
//         }
        
//         // Asli Magic Line: DB se data maang raha hai
//         const posts = await Post.find(query);
//         res.render("index.ejs", { posts });
//     } catch (err) {
//         console.log(err);
//         res.status(500).send("Database Error: " + err.message);
//     }
// });

// // New Post Form
// app.get("/posts/new", (req, res) => {
//     res.render("new.ejs");
// });

// // Create Post - Database mein save karega
// app.post("/posts", upload.single("image"), async (req, res) => {
//     try {
//         const { username, topic_name, content } = req.body;
//         const image = req.file ? `/uploads/${req.file.filename}` : null;
        
//         // Ab 'Post.create' error nahi dega kyunki Model sahi hai
//         await Post.create({ username, topic_name, content, image });
        
//         console.log("New Post Saved to DB!");
//         res.redirect("/posts");
//     } catch (err) {
//         console.log(err);
//         res.send("Error saving post: " + err.message);
//     }
// });

// // Show Single Post
// app.get("/posts/:id", async (req, res) => {
//     try {
//         const post = await Post.findById(req.params.id);
//         res.render("show.ejs", { post });
//     } catch (err) {
//         res.send("Post not found");
//     }
// });

// // Edit Form
// app.get("/posts/:id/edit", async (req, res) => {
//     try {
//         const post = await Post.findById(req.params.id);
//         res.render("edit.ejs", { post });
//     } catch (err) {
//         res.send("Error loading edit page");
//     }
// });

// // Update Post (PATCH)
// app.patch("/posts/:id", async (req, res) => {
//     try {
//         await Post.findByIdAndUpdate(req.params.id, { content: req.body.content });
//         res.redirect("/posts");
//     } catch (err) {
//         res.send("Error updating post");
//     }
// });

// // Delete Post (Optional - Agar button lagaya ho)
// app.delete("/posts/:id", async (req, res) => {
//     await Post.findByIdAndDelete(req.params.id);
//     res.redirect("/posts");
// });

// // Login/Signup (Placeholder Routes)
// app.get("/signup", (req, res) => res.render("signup.ejs", { error: null }));
// app.get("/login", (req, res) => res.render("login.ejs", { error: null }));

// app.get("/", (req, res) => res.redirect("/posts"));

// // Server Start
// app.listen(port, () => {
//     console.log(`🚀 Server listening on port ${port}`);
// });









// ----------------------------------------------------------------------------------------------------------
                                // UPDATE ON 14-05-26



require("dotenv").config();
const bcrypt = require('bcrypt');
const User = require('./models/User'); 
const express = require("express");
const app = express();
// const port = 3030;
const PORT = process.env.PORT || 3030;
const path = require("path");
const methodOverride = require("method-override");
const mongoose = require('mongoose');
const multer = require("multer");
const { format } = require('timeago.js'); // 1. Import kiya

// 1. Post Model Import (Ab ye sahi chalega!)
const Post = require('./models/Post'); 

// 2. MONGODB CONNECTION
// mongoose.connect('mongodb://127.0.0.1:27017/blogDB')
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('✅ MongoDB Connected Successfully'))
.catch(err => console.error('❌ MongoDB Connection Error:', err));


// 3. MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, "public")));
// 2. Isse poori website par 'format' function available ho jayega
app.locals.format = format;
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Multer Setup (Image Upload ke liye)
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, "public/uploads/"),
    filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});
const upload = multer({ storage: storage });

app.locals.format = format;

// ------------------- ROUTES -------------------

// Index Route - Database se Posts laayega
app.get("/posts", async (req, res) => {
    try {
        const { search } = req.query;
        let query = {};
        
        // Search Logic
        if (search) {
            query = {
                $or: [
                    { username: { $regex: search, $options: "i" } },
                    { content: { $regex: search, $options: "i" } },
                    { topic_name: { $regex: search, $options: "i" } }
                ]
            };
        }
        
        // Asli Magic Line: DB se data maang raha hai
        const posts = await Post.find(query);
        res.render("index.ejs", { posts });
    } catch (err) {
        console.log(err);
        res.status(500).send("Database Error: " + err.message);
    }
});

// New Post Form
app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});

// Create Post - Database mein save karega
app.post("/posts", upload.single("image"), async (req, res) => {
    try {
        const { username, topic_name, content } = req.body;
        const image = req.file ? `/uploads/${req.file.filename}` : null;
        
        // Ab 'Post.create' error nahi dega kyunki Model sahi hai
        await Post.create({ username, topic_name, content, image });
        
        console.log("New Post Saved to DB!");
        res.redirect("/posts");
    } catch (err) {
        console.log(err);
        res.send("Error saving post: " + err.message);
    }
});

// SIGNUP HANDLER: User create karega aur login page par bhejega
app.post("/signup", async (req, res) => {
    const { email, password } = req.body;
    try {
        // Password hash karna zaroori hai security ke liye
        const hashedPassword = await bcrypt.hash(password, 10);
        
        const newUser = new User({ 
            email: email, 
            password: hashedPassword 
        });
        
        await newUser.save();
        console.log("Naya user ban gaya!");
        res.redirect("/login"); // Flow: Signup ke baad Login
    } catch (err) {
        console.log(err);
        res.render("signup.ejs", { error: "Email already exists or error occurred." });
    }
});

// LOGIN HANDLER: Password check karega aur home page (/posts) par bhejega
app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email: email });
        
        if (user) {
            const isMatch = await bcrypt.compare(password, user.password);
            
            if (isMatch) {
                console.log("Login Successful!");
                res.redirect("/posts"); // Flow: Login ke baad seedha blog posts
            } else {
                res.render("login.ejs", { error: "Invalid password." });
            }
        } else {
            // Agar user nahi mila
            res.render("login.ejs", { error: "User not found." });
        }
    } catch (err) {
        console.log(err);
        res.render("login.ejs", { error: "Something went wrong." });
    }
});

// Show Single Post
app.get("/posts/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.render("show.ejs", { post });
    } catch (err) {
        res.send("Post not found");
    }
});

// Edit Form
app.get("/posts/:id/edit", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.render("edit.ejs", { post });
    } catch (err) {
        res.send("Error loading edit page");
    }
});

// Update Post (PATCH)
app.patch("/posts/:id", async (req, res) => {
    try {
        await Post.findByIdAndUpdate(req.params.id, { content: req.body.content });
        res.redirect("/posts");
    } catch (err) {
        res.send("Error updating post");
    }
});

// Delete Post (Optional - Agar button lagaya ho)
app.delete("/posts/:id", async (req, res) => {
    await Post.findByIdAndDelete(req.params.id);
    res.redirect("/posts");
});

// Login/Signup (Placeholder Routes)
app.get("/signup", (req, res) => res.render("signup.ejs", { error: null }));
app.get("/login", (req, res) => res.render("login.ejs", { error: null }));

// app.get("/", (req, res) => res.redirect("/posts"));
app.get("/", (req, res) => {
    res.redirect("/login");
});

app.get("/logout", (req, res) => {
    // Agar session use kar rahe hain toh session destroy karein
    // Abhi ke liye seedha login par redirect
    res.redirect("/login");
});

// Server Start
// app.listen(port, () => {
//     console.log(`🚀 Server listening on port ${port}`);
// });
app.listen(PORT, () => {
   console.log(`Server running on port ${PORT}`);
});