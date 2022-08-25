require('dotenv').config();
const path = require('path')
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());
app.use(require('./routes/users.route'));
app.use(require('./routes/categories.route'));
app.use(require('./routes/comments.route'));
app.use(require('./routes/blogs.route'));
app.use(express.static(path.join(__dirname, "public")))

mongoose.connect(process.env.MONGO)
    .then(() => console.log('Подключенились к базе'))
    .catch(() => console.log('Ошибка'))

app.listen(process.env.PORT, () => {
    console.log('подключились к серверу')
})