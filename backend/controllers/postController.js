const Tweet = require('../models/Post');

// Créer un nouveau post
exports.creerPost = async (req, res) => {
  try {
    const nouveauPost = new Tweet({
      utilisateur: req.body.utilisateur,
      contenu: req.body.contenu
    });

    const postEnregistre = await nouveauPost.save();
    res.status(201).json(postEnregistre);
  } catch (erreur) {
    res.status(400).json({ message: erreur.message });
  }
};

exports.getPosts = async (req, res) => {
    try {
      const posts = await Tweet.find();
      console.log('Nombre de posts:', posts.length);
      console.log('Posts détaillés:', posts);
      res.status(200).json(posts);
    } catch (erreur) {
      console.error('Erreur détaillée:', erreur);
      res.status(500).json({ message: erreur.message });
    }
  };

// Supprimer un Tweet
exports.supprimerPost = async (req, res) => {
  try {
    await Tweet.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Tweet supprimé' });
  } catch (erreur) {
    res.status(500).json({ message: erreur.message });
  }
};