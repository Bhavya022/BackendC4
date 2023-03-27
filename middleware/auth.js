const jwt=require("jsonwebtoken") 
const auth=(req,res,next)=>{
    const token=req.headers.authorization 
    if(token){
        jwt.verify(token,process.env.KEY,(err,decoded)=>{
            if(decoded){
                req.body.device=decoded.user 
                next()
            } 
            else{
                res.send({"msg":"wrong token generATED"}) 
            }
        })
    } 
    else{
        res.send("PLEASE LOGIN FIRST")
    }
} 

module.exports={auth}