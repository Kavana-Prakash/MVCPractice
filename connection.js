const mongoose = require('mongoose');
async function mongoConnection(url){
    return mongoose.connect(url).then(()=>console.log("success")).catch((err)=>console.log(err));
}

module.exports={
    mongoConnection,
};

