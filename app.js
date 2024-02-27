const express=require("express")
const app=express()
require("dotenv").config()
const PORT=process.env.PORT || 5600

app.get("/get",async(req,res,next)=>{
    try{
        res.send({message:"Deployed on AWS successfully and move to /hello path"})
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
app.get("/hello",async(req,res,next)=>{
    try{
        res.send({message:"Great.... move on new Task "})
    }catch(err){
        next(err)
    }
})
app.get("/",async(req,res,next)=>{
    try{
        res.send({message:"Hope it will work fine"})
    }catch(err){
        next(err)
    }
})
app.listen(8000,()=>{
    console.log(`Listening at ${PORT}`);
})