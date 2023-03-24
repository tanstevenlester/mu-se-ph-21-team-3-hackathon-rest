const {createuser, deleteUser, getAUser} = require('../controllers/userController')
const router = require('express').Router();

router.post('/', createuser)
router.get('/:id', getAUser)
router.delete('/:id', deleteUser)

module.exports = router