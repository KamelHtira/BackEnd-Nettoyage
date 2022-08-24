const mongoose = require("mongoose")


const nettoyeur = mongoose.Schema({
    cin:String,
    nom : String,
    prenom : String,
    email : String,
    ville : Number,
    sexe : String,
    tel : String,
    dateNaissance : String,
    role : String,
    modeDePass : String,
    salaireParJour:String

})

const nettoyeurSchema = mongoose.model("nettoyeur",nettoyeur)
module.exports =  {nettoyeurSchema}

