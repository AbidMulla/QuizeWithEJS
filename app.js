const express = require('express');
const dotenv = require('dotenv');
const ejs = require('ejs');
const path = require('path');

dotenv.config();
var app = express();

//Store both public and views path in variable
const static_path = path.join(__dirname, 'public');
const template_path = path.join(__dirname, 'templates/views');

// Serve static files from the specified static path
app.use(express.static(static_path));
// Set the view engine to EJS
app.set('view engine', 'ejs');
// Set the views directory path for rendering EJS files
app.set('views', template_path);



app.get('/',(req,res)=>{
    res.render('auth/login'); 
});

app.get('/register',(req,res)=>{
    res.render('auth/register');
})

app.get('/forgotPassword',(req,res)=>{
    res.render('auth/forgotPassword');
})

app.get('/landingPage',(req,res)=>{
    res.render('user/landingPage');
})

app.get('/dashboard',(req,res)=>{
    res.render('user/dashboard');
})


app.get('/subject',(req,res)=>{
    res.render('user/subject');
})

app.get('/htmlLelevs',(req,res)=>{
    res.render('user/htmlLelevs');
})

app.get('/questions',(req,res)=>{
    res.render('user/htmlquestions');
})


app.get('/mathLevels',(req,res)=>{
    res.render('user/mathLevels');
})

app.get('/mathquestion',(req,res)=>{
    res.render('user/mathquestion');
})

const port = 2000;
app.listen(port, () => {
    console.log(`Your quiz app is running on port ${port}`);
});
