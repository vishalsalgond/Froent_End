//jshint vesversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app  = express();
app.set('view engine','ejs');
app.use(express.static("public"));

let posts = [];

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.render("home");
});

app.get("/about", function(req, res){
    res.render("aboutus");
});

app.get("/blogs", function(req, res){
    res.render("blogs");
});

app.get("/login", function(req, res){
    res.render("login");
});

app.post("/blogs", function(req, res){
    const post = {
        title : req.body.postTitle,
        content : req.body.postBody
    };
    posts.push(post);
});
    

app.listen(3000, function(){
    console.log("The server is running on port 3000.");
  });
  