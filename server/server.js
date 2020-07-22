const express = require('express');
const mongoose = require('mongoose');
const user = require('./router/user')
const post = require('./router/post')

// const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port =process.env.PORT || 3001;
const Post = require('./postSchema');

//build
const path = require('path');

app.use(express.static(path.join(__dirname, 'build')));

// app.get('/', function(req, res) {



app.use(cors());

app.use(express.json());

app.use('/user', user);
app.use('/post', post);

app.use('/api', (req, res)=> {
    const post2 = new Post({title: "hello", content:"text", author:"jiseong", likes:""})
    post2.save((err,post)=>{console.log(post.title + "save!!")})

    console.log(req.query.id)
    return res.json({title:'LOADED'})
});

app.listen(port, ()=>{
    console.log(`express is running on ${port}`);
})

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/test', {useUnifiedTopology: true, useNewUrlParser:true})
.then(() => console.log('success conn'))
.catch(e => console.log(e));

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {});


app.use('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });






  