const express = require("express");
const {  getAllNettoyeurs, getNettoyeurById, addNettoyeur, updateNettoyeur, deleteNettoyeurById  } = require("../controllers/nettoyeur.controller");
const {  getAllClients, getClientById, addClient, updateClient, deleteClientById  } = require("../controllers/client.controller");
const router = express.Router()
router.use(express.json())

// Nettoyeur routes : 

router.get('/nettoyeurs', getAllNettoyeurs);

router.post('/nettoyeurs', addNettoyeur);

router.get('/nettoyeurs/:id', getNettoyeurById); 

router.put('/nettoyeurs/:id', updateNettoyeur);

router.delete('/nettoyeurs/:id', deleteNettoyeurById);

// Client routes : 

router.get('/clients', getAllClients);

router.post('/clients', addClient);

router.get('/clients/:id', getClientById); 

router.put('/clients/:id', updateClient);

router.delete('/clients/:id', deleteClientById);

module.exports = router;