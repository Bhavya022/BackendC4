const mongoose= require("mongoose") 
//const { boolean } = require("webidl-conversions")

const UserSchema=mongoose.Schema({
//     name ==> String
// email ==> String
// gender ==> String
// password ==> String
// age ==> Number
// city ==> String
// is_married ==> boolean 
name:{type:String,required:true},
email:{type:String,required:true,unique:true}, 
gender:{type:String,required:true},
password:{type:String,required:true},
age:{type:Number,required:true},
city:{type:String,required:true},
 is_married:{type:Boolean}
},{
    versionKey:false
})   
const userModel=mongoose.model("user",UserSchema) 

module.exports={
    userModel
}