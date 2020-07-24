const router = require('express').Router(),
    indexController = require('../controllers/indexController'),
    dogeetController = require('../controllers/dogeetController');

router.get('/', indexController);

router.get('/new', dogeetController.new);
router.post('/new', dogeetController.newAction);

router.get('/:id', dogeetController.find);

module.exports = router;