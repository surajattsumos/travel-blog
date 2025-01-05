const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const mongoURI = process.env.MONGODB_URI || "mongodb://localhost:27017/blogdb";

// ミドルウェアの設定
app.use(cors());
app.use(express.json());

// MongoDBへの接続
mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// ルートの設定
app.use('/api/posts', require('./routes/posts'));

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 