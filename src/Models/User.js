const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{type:String,required:true, unique:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    videos:[{type:mongoose.Schema.Types.ObjectId,ref:'Video'}],
    createdAt:{
        type:Date,default:Date.now
    }
});
module.exports = mongoose.model('User',userSchema);//collections name = users