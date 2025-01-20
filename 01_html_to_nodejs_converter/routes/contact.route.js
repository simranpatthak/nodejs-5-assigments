const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contact.controller');

router.get('/', contactController.getContact);
router.post('/', contactController.submitContact);

module.exports = router;