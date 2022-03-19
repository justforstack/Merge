const express =require("express");
const router=express.Router();

router.post("/loadDefault",async(req,res)=>{
    let data=req.body.data.x;
    console.log(data);
    res.json({digit:"it"})
})

module.exports=router;