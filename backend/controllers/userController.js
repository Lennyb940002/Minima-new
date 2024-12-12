const User = require('../models/User');

exports.creerUtilisateur = async (req, res) => {
  try {
    const nouvelUtilisateur = new User(req.body);
    const utilisateurEnregistre = await nouvelUtilisateur.save();
    res.status(201).json(utilisateurEnregistre);
  } catch (erreur) {
    res.status(400).json({ message: erreur.message });
  }
};

exports.getUtilisateurs = async (req, res) => {
  try {
    const utilisateurs = await User.find();
    res.status(200).json(utilisateurs);
  } catch (erreur) {
    res.status(500).json({ message: erreur.message });
  }
};