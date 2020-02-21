var express = require('express');
var router = express.Router();
var skillDb = require('../models/skill')
var skillsCtrl = require('../controllers/skills')

router.get('/', skillsCtrl.index);
router.get('/new', skillsCtrl.new);
router.get('/:id', skillsCtrl.show);
module.exports = router;