const express = require('express');
const postsRoutes = require('./routes/posts');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json())
app.use('/posts',postsRoutes)

app.listen('5000',()=>console.log('connected...'))