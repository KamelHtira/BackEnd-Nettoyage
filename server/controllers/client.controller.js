
const {clientSchema}  =require("../models/client")
require('mongoose')
// get all clients
async function  getAllClients(req, res){
    try {
    const allClients = await clientSchema.find({})
    res.json(allClients)
    } catch (error) {
        console.log(error);
        res.status(400).json({err : "can not get all clients" })
    }
}

// get Client by ID
async function getClientById (req,res){
    try {
        let {id} = req.params;
        const client = await clientSchema.find({_id : id})
        res.json(client)

    }catch(e){
        res.status(400).json({"msg":"can not find client with "+ id  + " Id"})
    } 

}

// Add client 
async function  addClient(req,res){
    
   
        const Client = new clientSchema({ 
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

    //saving client
        try {
            await Client.save().then(()=>console.log("success"))
            res.json(Client)
        }catch (error) {
            return res.json("can not add client : " + error)
        }
      
    
}

//update client  
async function updateClient (req,res){
    try {
        var clientOldInfos = await clientSchema.findOne({_id : req.params.id})
    }catch(e){
       return res.status(400).json({"msg":"client with "+req.params.id+" id not found" } )
    } 


    if (clientOldInfos) {

    const Client = {
        cin:req.body.cin || clientOldInfos.cin,
        nom : req.body.nom || clientOldInfos.nom,
        prenom : req.body.prenom|| clientOldInfos.prenom,
        email : req.body.email|| clientOldInfos.email,
        ville : req.body.ville|| clientOldInfos.ville,
        sexe : req.body.sexe|| clientOldInfos.sexe,
        tel : req.body.tel|| clientOldInfos.tel,
        dateNaissance : req.body.dateNaissance|| clientOldInfos.dateNaissance,
        role : req.body.role|| clientOldInfos.role,
        modeDePass : req.body.modeDePass|| clientOldInfos.modeDePass,
        salaireParJour:req.body.salaireParJour|| clientOldInfos.salaireParJour
    }

     try {
        await clientSchema.findOneAndUpdate({_id :req.params.id} , Client)
        return res.json("success \n"+Client)
     } catch (error) {
        return res.status(400).json("can not update client : " + error  )
     }
    
        
    
    }
    return res.status(400).json({"msg":"client with "+req.params.id+" id not found" } )
}

// delete Client by ID
async function deleteClientById (req,res){
    
    try {
        let client = await clientSchema.findById(req.params.id);
        await client.delete()
        res.status(204).json("success : \n"+client)
    }catch(e){
        res.status(404).json({"msg":"error in deleting "+req.params.id })
    } 
   
        
    
}

module.exports= { getAllClients, getClientById, addClient, updateClient, deleteClientById }

