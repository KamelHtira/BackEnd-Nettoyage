const express = require("express");
const { verifyLogin } = require("../controllers/authentification")
const router = express.Router()
router.use(express.json())

// auth routes : 

router.post('/login', verifyLogin); 



module.exports = router;