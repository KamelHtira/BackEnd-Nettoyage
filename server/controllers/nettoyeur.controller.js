
const {nettoyeurSchema} = require("../models/nettoyeur")
require('mongoose')

// get all nettoyeurs
async function  getAllNettoyeurs(req, res){
    try {
    const allNettoyeurs = await nettoyeurSchema.find({})
    res.json(allNettoyeurs)
    } catch (error) {
        console.log(error);
        res.status(400).json({err : "can not get all nettoyeurs" })
    }
}

// get Nettoyeur by ID
async function getNettoyeurById (req,res){
    try {
        let {id} = req.params;
        const nettoyeur = await nettoyeurSchema.find({_id : id})
        res.json(nettoyeur)

    }catch(e){
        res.status(400).json({"msg":"can not find nettoyeur with "+ id  + " Id"})
    } 

}

// Add nettoyeur 
async function  addNettoyeur(req,res){
    
   
        const Nettoyeur = new nettoyeurSchema({ 
            cin:req.body.cin,
            nom : req.body.nom,
            prenom : req.body.prenom,
            email : req.body.email,
            ville : req.body.ville,
            sexe : req.body.sexe,
            tel : req.body.tel,
            dateNaissance : req.body.dateNaissance,
            role : req.body.role,
            modeDePass : req.body.modeDePass,
            salaireParJour:req.body.salaireParJour
        })

    //saving nettoyeur
        try {
            await Nettoyeur.save().then(()=>console.log("success"))
            res.json(Nettoyeur)
        }catch (error) {
            return res.json("can not add nettoyeur : " + error)
        }
      
    
}

//update nettoyeur  
async function updateNettoyeur (req,res){
    try {
        var nettoyeurOldInfos = await nettoyeurSchema.findOne({_id : req.params.id})
    }catch(e){
       return res.status(400).json({"msg":"nettoyeur with "+req.params.id+" id not found" } )
    } 


    if (nettoyeurOldInfos) {

    const Nettoyeur = {
        cin:req.body.cin || nettoyeurOldInfos.cin,
        nom : req.body.nom || nettoyeurOldInfos.nom,
        prenom : req.body.prenom|| nettoyeurOldInfos.prenom,
        email : req.body.email|| nettoyeurOldInfos.email,
        ville : req.body.ville|| nettoyeurOldInfos.ville,
        sexe : req.body.sexe|| nettoyeurOldInfos.sexe,
        tel : req.body.tel|| nettoyeurOldInfos.tel,
        dateNaissance : req.body.dateNaissance|| nettoyeurOldInfos.dateNaissance,
        role : req.body.role|| nettoyeurOldInfos.role,
        modeDePass : req.body.modeDePass|| nettoyeurOldInfos.modeDePass,
        salaireParJour:req.body.salaireParJour|| nettoyeurOldInfos.salaireParJour
    }

     try {
        await nettoyeurSchema.findOneAndUpdate({_id :req.params.id} , Nettoyeur)
        return res.json("success \n"+Nettoyeur)
     } catch (error) {
        return res.status(400).json("can not update nettoyeur : " + error  )
     }
    
        
    
    }
    return res.status(400).json({"msg":"nettoyeur with "+req.params.id+" id not found" } )
}

// delete Nettoyeur by ID
async function deleteNettoyeurById (req,res){
    
    try {
        let nettoyeur = await nettoyeurSchema.findById(req.params.id);
        await nettoyeur.delete()
        res.status(204).json("success : \n"+nettoyeur)
    }catch(e){
        res.status(404).json({"msg":"error in deleting "+req.params.id })
    } 
   
        
    
}

module.exports = { getAllNettoyeurs, getNettoyeurById, addNettoyeur, updateNettoyeur, deleteNettoyeurById }

