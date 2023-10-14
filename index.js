const express= require('express');

const PORT=8000;
const router=require("./routes/user");
const {mongoConnection}=require("./connection");
const {logReqRes}=require("./middlewares/log")

//CONNECTION

mongoConnection("mongodb://127.0.0.1/MVCPractice");


const app=express();

//middlewares
app.use(express.urlencoded({extended:false}));
app.use(logReqRes("log.txt"))


//routes
app.use("/user",router);

app.listen(8000,()=>console.log("Listening"))

