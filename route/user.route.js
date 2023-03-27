const express=require("express") 
const {userModel}=require("../model/user.model") 
const Router=express.Router()  
const jwt=require("jsonwebtoken") 
const bcrypt=require("bcrypt") 
Router.post("/register",async(req,res)=>{ 
    const {name,email,gender,password,age,city,is_married} = req.body  
    try{ 
      bcrypt.hash(password,5,async(err,hash)=>{
        const user = new userModel(new_user) 
        await user.save()
           
           res.send({"msg":"user registered successfully"})
      })
 
    } catch(err){ 
        res.status(400).send("not done") 
        console.log(err)
    }
}) 

Router.post("/login",async(req,res)=>{ 
    const {email,password} = (req.body)  
  try{ 
    const user=await userModel.find({email,password}) 
    if(user.length>0){ 
        bcrypt.compare(pass,user[0].pass,function(err,result){
            let token=jwt.sign({userId:user._id},process.env.KEY)
            res.send({"msg":"user logn successfully",token})
        })

    } 
    else{
        res.send({"msg":"wrong credentials"}) 
    }
  } 
  catch(err){ 
    res.status(400).send("not done")
    console.log(err)
  }
}) 

module.exports={Router}