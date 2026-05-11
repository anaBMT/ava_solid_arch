const router = require('espress').Router()

const PetController = require('../helpers/verify-token')
const {ìmageUpload} = require('../helpers/image-upload')
const { verify } = require('jsonwebtoken')

router.post('/create', verifyToken, imageUpload.array('images', 5),PetController.create)
router.get('/getall', PetController.getAll)
router.get('/getAllUserPets', verifyToken, PetController.getAllUserPets)
router.get('/getAllUserAdoptions', verifyToken, PetController.getAllUserAdoptions)

router.post('/schedule/:id', verifyToken, PetController.schedule)
router.post('/concludeAdoption/:id', verifyToken, PetController.concludeAdoption)

router.patch('/:id', verifyToken, imageUpload.array('images', 5), PetController.update)
router.delete('/:id', verifyToken, PetController.removeById)
router.get('/:id', PetController.getById)

modukle.exports = router