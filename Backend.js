const express = require('express');
const app = express();
const mongoose = require('mongoose');
const multer = require('multer');
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');
const User = require('./src/Models/User.js');
const Video = require("./src/Models/Video.js");
dotenv.config();

// //connect to backend to frontend
app.use(cors());
// //body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// // //connecting to the database
mongoose.connect('mongodb://localhost:27017/StreamVault', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected'))
    .catch((err) => console.log(err));
// // //multer 
// app.use('/uploads',express.static(path.join(__dirname,'uploads')));
// app.use('/',express.static(path.join(__dirname,'index.html')));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});
const upload = multer({ storage });

app.use('/build', express.static(path.join(__dirname, 'build')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.get('/home', async (req, res) => {
    try {
        const publicVideos = await Video.find({ privacy: 'public' }).populate('owner', 'username');
        res.status(200).json(publicVideos);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch videos" });
    }
});
app.get("/home/myvideos/:ownerId", async (req, res) => {
    const { ownerId } = req.params;
    console.log(ownerId);
    try {
        const userVideos = await Video.find({ owner: ownerId }).populate('owner', 'username');
        res.status(200).json(userVideos);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Failed to fetch videos" });
    }
});

app.get("/home/videos/:_id",async(req,res)=>{
    // res.json({message:"get request"});
   
    try{
        const video = await Video.findOneAndUpdate({_id:req.params._id},{$inc:{views:1}},{new:true}).populate('owner','username');
        res.status(200).json(video);
    }catch(err){
        console.log(err)
    }
});
app.post("/uploads", upload.single('video'), async (req, res) => {
    const { title, Author, privacy } = req.body;
    const file = req.file;
    try {
        const user = await User.findOne({ username: Author });
        const video = new Video({
            owner: user._id,
            title,
            Author,
            privacy,
            url: file.path,

        });
        await video.save();
        res.status(201).json({ message: "Video uploaded successfully" });
    } catch (err) {
        console.log(err);
    }
});


app.post("/", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        console.log(user);
        if (user) {

            res.json("exist");
        } else {
            res.json("not exist");
        }


    } catch (err) {
        res.json("not exist");

    }
});
app.post("/signup", async (req, res) => {
    const { username, password, email } = req.body;
    const user = new User({
        username, password, email
    });
    try {
        const check = await User.findOne({ email });
        if (check) {
            res.json("exist");
        } else {
            res.json("not exist");
            await User.insertMany([user]);
        }
    } catch (err) {
        res.json("not exist");
    }
});
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
