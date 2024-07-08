const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
    title:{type:String,required:true},
    privacy:{type:String,enum:['public','private'],required:true},
    owner:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true},
    Author:{type:String,required:true},
    url:{type:String,required:true},
    views:{type:Number,default:0},
    createdAt:{type:Date,default:Date.now}
});
module.exports = mongoose.model('Video',videoSchema);