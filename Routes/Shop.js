const express = require('express');
const path=require('path')
const router = express.Router();
const shopController=require('../Controller/shopcontroller')

router.get('/', shopController.shopcontroller);

module.exports = router;
