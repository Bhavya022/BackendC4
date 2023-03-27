const express =require("express") 
const app=express()  
const {connection}=require("./db") 
const {Router}=require("./route/user.route") 
const {postRouter}=require("./route/post.route") 
const {auth}=require("./middleware/auth")
app.use(express.json()) 
app.use("/users",Router) 
app.use(auth) 
app.use("/posts",postRouter) 

app.get("/",(req,res)=>{
    res.send("Home Page") 
})



app.listen(8000,async()=>{ 
    try{
  await connection 
  console.log("connected to db")
    } 
    catch(err){
        console.log(err)
    }
    console.log("server is running") 
})