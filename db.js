const mongoose=require("mongoose") 
require("dotenv").config() 
const connection=mongoose.connect("mongodb+srv://bhavya:bhavya@cluster0.kin5ecd.mongodb.net/db?retryWrites=true&w=majority") 

module.exports={
    connection
}