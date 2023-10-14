const express = require("express");
const router = express.Router();
const {handlegetAllUser,
       handlegetUserById,
       handleupdateUserById,
       handledeleteUserById,
       handleCreateUser}=require("../controller/usersController")

// router.get("/",async (req,res)=>{
//     const userList=await Users.find({});
//     const html=`
//     <ul>
//         ${userList.map((user)=>`<li> ${user.firstName}- ${user.email}</li>`).join("")}
//     </ul>`
//     return res.status(201).send(html);
// })

router.route("/").get(handlegetAllUser).post(handleCreateUser)

router.route("/:id").get(handlegetUserById)
.patch(handleupdateUserById)
.delete(handledeleteUserById)

module.exports = router;