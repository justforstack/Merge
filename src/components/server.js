const express=require("express");
const m=require("./routing");

const app=express();
app.use(m);

module.exports=app;