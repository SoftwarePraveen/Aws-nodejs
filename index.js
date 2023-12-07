const express=require("express")
const app=express()

app.get("/get",async(req,res,next)=>{
    try{
        res.send({message:"Hello Nodejs"})

    }catch(err){
        next(err)
    }
})

app.listen(8000,()=>{
    console.log("Listening at 8000");
})