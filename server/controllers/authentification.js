const {nettoyeurSchema} = require("../models/nettoyeur");



//verify login
async function verifyLogin(req, res){
    try{
        
    const a = await nettoyeurSchema.findOne({ cin: req.body.cin}).lean()
    
      if(!a){    
        return res.json({status: "error",message: " user not found"})
       }
    
    if(req.body.modeDePass==a.modeDePass){    
      console.log('password match hash')
      
      return res.json({status: "ok",message: "welcome !  "})
    }
  
    return res.json({status: "error",message: "password does not match"})
    }
    catch(err)
    {
      console.log(err);
    }
  }
  
  module.exports = { verifyLogin }