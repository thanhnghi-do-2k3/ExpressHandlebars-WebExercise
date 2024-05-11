const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

router.get('/', controller.task4List);
router.get('/:name', controller.task4Detail);

module.exports = router;