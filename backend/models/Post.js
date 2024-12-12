const mongoose = require('mongoose');

const TweetSchema = new mongoose.Schema({
  utilisateur: {
    type: String,
    required: true,
    trim: true
  },
  contenu: {
    type: String,
    required: true,
    maxlength: 280  // Limite comme Twitter
  },
  dateCreation: {
    type: Date,
    default: Date.now
  },
  likes: {
    type: Number,
    default: 0
  }
}, { timestamps: true });

module.exports = mongoose.model('tweets', TweetSchema);