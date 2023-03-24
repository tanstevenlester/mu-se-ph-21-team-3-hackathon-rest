const {createClass, getAClass, getAllClasses, deleteClass} = require('../controllers/classControllers')
const router = require('express').Router();

router.post('/', createClass);
router.get('/', getAllClasses);
router.get('/:id', getAClass);
router.delete('/:id', deleteClass)

module.exports = router