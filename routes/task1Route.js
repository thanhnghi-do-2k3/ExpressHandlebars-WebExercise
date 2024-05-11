const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

router.get('/', controller.task1);


module.exports = router;