const mongoose = require("mongoose")


const client = mongoose.Schema({
    cin:String,
    nom : String,
    prenom : String,
    email : String,
    ville : Number,
    sexe : String,
    tel : String,
    dateNaissance : String,
    role : String,
    modeDePass : String

})

const clientSchema = mongoose.model("client",client)
module.exports =  {clientSchema}

