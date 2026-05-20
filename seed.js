// const mongoose = require('mongoose');
// const Post = require('./models/Post'); // Ab ye sahi file uthayega

// // Connection wahi jo index.js mein hai
// mongoose.connect('mongodb://127.0.0.1:27017/blogDB')
// .then(async () => {
//     console.log("✅ Seed Script Connected to DB!");

//     // 1. Purana kachra saaf (Delete Old Data)
//     await Post.deleteMany({});
//     console.log("🧹 Purana data delete ho gaya.");

//     // 2. Naya Data taiyaar
//     const dummyPosts = [
//         { username: "Harry", topic_name: "Magic", content: "Hogwarts is amazing!", likes: 10 },
//         { username: "Ron", topic_name: "Food", content: "Chicken legs are the best.", likes: 5 },
//         { username: "Hermione", topic_name: "Books", content: "When in doubt, go to the library.", likes: 100 }
//     ];

//     // 3. Database mein bhejo
//     await Post.insertMany(dummyPosts);
//     console.log("🎉 3 Naye Posts save ho gaye!");
//     console.log("Database fix ho gaya hai. Ab tum server chala sakte ho.");
//     process.exit();
// })
// .catch(err => {
//     console.log("❌ Error:", err);
// });


























// const mongoose = require('mongoose');
// const Post = require('./models/Post');

// Database se connect
// require("dotenv").config();

// const mongoose = require('mongoose');
// const Post = require('./models/Post');

// mongoose.connect(process.env.MONGO_URL)
// .then(async () => {
//     console.log("✅ Database Connected!");

//     // 1. Purana data saaf karo (Optional: Agar chaho toh ye line hata sakte ho)
//     await Post.deleteMany({});
//     console.log("🧹 Purana data saaf kiya...");

//     // 2. Dummy Data Arrays
//     const dummyUsers = ["CodeMaster", "WebNinja", "Dev_Priya", "Rahul123", "TechGuru", "SystemHacker", "CoffeeCoder", "ByteMe"];
//     const dummyTopics = ["JavaScript Help", "Python vs Java", "Interview Tips", "React Guide", "Motivation", "Bugs & Fixes", "Career Advice"];
//     // const dummyContents = [
//     //     "Aaj maine ek naya bug fix kiya, bohot maza aaya!",
//     //     "Node.js seekhna shuru kiya hai, koi tips?",
//     //     "LeetCode ke sawal kaafi tough lag rahe hain.",
//     //     "Bootstrap se design karna kitna aasaan hai!",
//     //     "Raat bhar coding karne ka alag hi sukoon hai.",
//     //     "Finally got placed in my dream company! Thanks everyone.",
//     //     "Mongoose connect ho gaya guys, party!"
//     // ];
//     const dummyContents = [
// `Just solved a challenging DSA problem today.
// Spent hours debugging but finally got the correct output.
// Consistency really pays off in coding.`,

// `Started learning Node.js and Express recently.
// Backend development feels super interesting now.
// Excited to build more full-stack projects.`,

// `Worked on improving my portfolio website today.
// Added animations and made the UI more responsive.
// Frontend development is actually fun.`,

// `LeetCode questions are getting tougher day by day.
// Trying to improve my problem-solving skills consistently.
// Hopefully interview prep goes well.`,

// `Finally deployed my first full-stack project online.
// The deployment process was confusing at first.
// But seeing the live website feels amazing.`,

// `Learning MongoDB Atlas and cloud deployment today.
// Faced multiple database connection issues initially.
// Managed to solve them after lots of debugging.`,

// `Late-night coding sessions hit differently.
// Completed multiple pending features tonight.
// Feeling productive and motivated.`,

// `Exploring authentication and authorization in Express.
// Understanding sessions and middleware properly now.
// Security concepts are becoming clearer.`,

// `Started revising DBMS concepts for interviews.
// Normalization and indexing are very important topics.
// Need more practice with SQL queries.`,

// `Building projects is teaching me more than tutorials.
// Every bug helps me understand concepts deeply.
// Hands-on learning is definitely the best way.`
// ];

//     // 3. 50 Posts Generate karne wala Loop
//     const allPosts = [];
//     for (let i = 0; i < 50; i++) {
//         const randomUser = dummyUsers[Math.floor(Math.random() * dummyUsers.length)];
//         const randomTopic = dummyTopics[Math.floor(Math.random() * dummyTopics.length)];
//         const randomContent = dummyContents[Math.floor(Math.random() * dummyContents.length)];

//         // allPosts.push({
//         //     username: randomUser,
//         //     topic_name: randomTopic,
//         //     content: randomContent,
//         //     likes: Math.floor(Math.random() * 500),
//         //     // Random image (Optional)
//         //     image: null 
//         //     postedAt: new Date(Date.now() - Math.floor(Math.random() * 1000 * 60 * 60 * 24 * 5))
//         // });
//         // seed.js ke loop ke andar
//     allPosts.push({
//         username: randomUser,
//         topic_name: randomTopic,
//         content: randomContent,
//         likes: Math.floor(Math.random() * 500),
//         image: null,
        
//         // 👇 Random Time Generate Karne ka Magic 👇
//         // Abhi ke time se random ghante/din minus kar rahe hain
//         postedAt: new Date(Date.now() - Math.floor(Math.random() * 1000 * 60 * 60 * 24 * 5)) 
//     });
//     }

//     // 4. Ek saath Database mein save karo
//     await Post.insertMany(allPosts);
//     console.log("🎉 50 Permanent Posts Database mein save ho gaye!");
//     process.exit();
// })
// .catch(err => {
//     console.log("❌ Error:", err);
// });





// --------------------------------------------UPDATED ON 20-05-26------------------------------------


require("dotenv").config();

const mongoose = require("mongoose");
const Post = require("./models/Post");

mongoose.connect(process.env.MONGO_URL)
.then(async () => {
    console.log("✅ Database Connected!");

    await Post.deleteMany({});
    console.log("🧹 Old data deleted...");

    const dummyUsers = [
        "CodeMaster",
        "WebNinja",
        "Dev_Priya",
        "Rahul123",
        "TechGuru",
        "SystemHacker",
        "CoffeeCoder",
        "ByteMe"
    ];

    const dummyTopics = [
        "JavaScript Help",
        "Python vs Java",
        "Interview Tips",
        "React Guide",
        "Motivation",
        "Bugs & Fixes",
        "Career Advice"
    ];

    const dummyContents = [
`Just solved a challenging DSA problem today.
Spent hours debugging but finally got the correct output.
Consistency really pays off in coding.`,

`Started learning Node.js and Express recently.
Backend development feels super interesting now.
Excited to build more full-stack projects.`,

`Worked on improving my portfolio website today.
Added animations and made the UI more responsive.
Frontend development is actually fun.`,

`LeetCode questions are getting tougher day by day.
Trying to improve my problem-solving skills consistently.
Hopefully interview prep goes well.`,

`Finally deployed my first full-stack project online.
The deployment process was confusing at first.
But seeing the live website feels amazing.`,

`Learning MongoDB Atlas and cloud deployment today.
Faced multiple database connection issues initially.
Managed to solve them after lots of debugging.`,

`Late-night coding sessions hit differently.
Completed multiple pending features tonight.
Feeling productive and motivated.`,

`Exploring authentication and authorization in Express.
Understanding sessions and middleware properly now.
Security concepts are becoming clearer.`,

`Started revising DBMS concepts for interviews.
Normalization and indexing are very important topics.
Need more practice with SQL queries.`,

`Building projects is teaching me more than tutorials.
Every bug helps me understand concepts deeply.
Hands-on learning is definitely the best way.`
    ];

    const allPosts = [];

    for (let i = 0; i < 50; i++) {
        const randomUser =
            dummyUsers[Math.floor(Math.random() * dummyUsers.length)];

        const randomTopic =
            dummyTopics[Math.floor(Math.random() * dummyTopics.length)];

        const randomContent =
            dummyContents[Math.floor(Math.random() * dummyContents.length)];

        allPosts.push({
            username: randomUser,
            topic_name: randomTopic,
            content: randomContent,
            likes: Math.floor(Math.random() * 500),
            image: null,
            postedAt: new Date(
                Date.now() - Math.floor(Math.random() * 1000 * 60 * 60 * 24 * 5)
            )
        });
    }

    await Post.insertMany(allPosts);

    console.log("🎉 50 posts inserted successfully!");
    process.exit();
})
.catch(err => {
    console.log("❌ Error:", err);
});