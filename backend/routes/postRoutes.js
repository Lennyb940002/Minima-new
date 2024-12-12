const express = require('express');
const router = express.Router();
const { creerPost, getPosts, supprimerPost } = require('../controllers/postController');

router.post('/', creerPost);
router.get('/', getPosts);
router.delete('/:id', supprimerPost);

module.exports = router;