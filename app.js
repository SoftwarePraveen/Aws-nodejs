const express=require("express")
const app=express()
require("dotenv").config()
const PORT=process.env.PORT || 5600

app.get("/get",async(req,res,next)=>{
    try{
        res.send({message:"Hello Nodejs"})
    }catch(err){
        next(err)
    }
})
app.get("/check",async(req,res,next)=>{
    try{
        res.send({message:"Hello Nodejs-aws is working fine or not"})
    }catch(err){
        next(err)
    }
})

app.listen(PORT,()=>{
    console.log(`Listening at ${PORT}`);
})