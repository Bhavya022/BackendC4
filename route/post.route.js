const express=require("express") 
const {postModel}=require("../model/post.model") 
const postRouter=express.Router()  
const jwt=require("jsonwebtoken") 
const bcrypt=require("bcrypt") 
require("dotenv").config() 
postRouter.post("/add",async(req,res)=>{ 
    const new_post = (req.body)  
    try{
 const user = new postModel(new_post)  
 await user.save()
    
    res.send({"msg":"post added successfully"}) 
    } catch(err){
        res.status(400).send("not done")
    }
})  
postRouter.get("",async(req,res)=>{  
    const token=req.headers.authorization 
    try{ 
        if(token){ 
            jwt.verify(token,process.env.KEY,async(err,decoded)=>{
                if(decoded){
                    const post= await postModel.find() 
                    res.status(200).send(post)
                } 
                else{
                    res.status(400).send("please login first")
                }
            })
    
    }
}
    catch(err){
        res.status(400).send("not fetch")
    }
}) 
postRouter.get("/top",async(req,res)=>{
    try{

    } 
    catch(err){
        res.status(400).send("not fetch") 
    }
})
postRouter.patch("/update/:postID",async(req,res)=>{
    const postID=req.params.postID 
    try{
const post= new postModel.findByIdAndUpdate({_id:postID},req.body,{new:true})
await post.save() 
res.status(400).send("post updated") 
    } 
    catch(err){
        res.status(400).send("not updated")
    }
})

postRouter.delete("/delete/:postID",async(req,res)=>{
    try{
   const deleted_post=await postModel.findByIdAndDelete(req.params.postID) 
   console.log(deleted_post) 
   if(!deleted_post){
    res.status(400).send({msg:"post not deleted"})
   } 
   else{
    res.status(200).send({msg:"post deleted successfully"})
   }
    } 
    catch(err){
        res.status(400).send({err:err.message}) 
    }
})

module.exports={postRouter}