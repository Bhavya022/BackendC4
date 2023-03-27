const mongoose=require("mongoose") 

const postSchema=mongoose.Schema({
//     title ==> String
// body ==> String
// device ==> String
// no_of_comments ==> Number 
title:{type:String,required:true},
body:{type:String,required:true},
device:{type:String,required:true},
no_of_comments:{type:Number,required:true}
}) 
const postModel = mongoose.model("post",postSchema) 

module.exports={postModel}