const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController.js')

router.get('/', userController.obterDados)
router.get('/:id',userController.obterPorId)
router.post("/", userController.postarDados)

module.exports = router