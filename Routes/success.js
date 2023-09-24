const express = require('express');
const path = require('path');
const sucessController=require('../Controller/SucessController')
const router = express.Router();

router.post('/success',sucessController.sucessController);


module.exports = router; 
