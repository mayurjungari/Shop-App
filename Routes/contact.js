const path = require('path');
const express = require('express'); 
const router = express.Router();
const contactcontroller = require('../Controller/contactcontroller')

router.get('/Contact', contactcontroller.contactcontroller);

module.exports = router;

