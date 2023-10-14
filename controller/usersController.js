const Users = require("../models/userModel")


async function handlegetAllUser(req,res){
    const userList=await Users.find({});
    return res.status(201).json(userList);
}

async function handlegetUserById(req,res){
    const user = await Users.findById(req.params.id);
    if(!user)return res.status(404).json({msg:"User not found"});
    return res.status(201).json(user);
}

async function handleupdateUserById(req,res){
    const body=req.body;
    await Users.findByIdAndUpdate(req.params.id,{lastName: body.last_name});
    return res.status(200).json({msg:"success", changedLastName:body.last_name});
}

async function handledeleteUserById(req,res){
    await Users.findByIdAndDelete(req.params.id);
    return res.status(200).json({msg:"success"});
}
async function handleCreateUser(req,res){
    const body=req.body;
    if(
        !body ||
        !body.first_name ||
        !body.last_name ||
        !body.email
    ){
        return res.status(400).json({msg:"All fields are not filled"});
    }
    const userCreated = await Users.create({
        firstName:body.first_name,
        lastName:body.last_name,
        email:body.email,
        gender:body.gender,
        jobTitle:body.job_title
    }) ;
    console.log(userCreated);
    return res.status(201).json({msg:"User created"});
}

module.exports = {
    handlegetAllUser,
    handlegetUserById,
    handleupdateUserById,
    handledeleteUserById,
    handleCreateUser,
}