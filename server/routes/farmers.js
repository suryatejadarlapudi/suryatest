var express = require('express');
var router = express.Router();


// Require controller modules.
const farmers = require('../controllers/farmers');
router.get('/farmerslist', farmers.get_farmers_list);

module.exports = router;