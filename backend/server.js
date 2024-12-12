require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connexion MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(()=> console.log("data-base connected")
).catch((err)=>console.error(err)
)


// Routes
app.use('/posts', require('./routes/postRoutes'));

app.listen(PORT, () => {
  console.log(`Serveur running on port ${PORT}`);
});