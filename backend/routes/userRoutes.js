const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/', userController.creerUtilisateur);
router.get('/', userController.getUtilisateurs);

module.exports = router;