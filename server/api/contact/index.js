'use strict';

var express = require('express');
var controller = require('./contact.controller');

var router = express.Router();

router.post('/', controller.sendMail);
router.post('/support', controller.sendMailToSupport);

module.exports = router;
