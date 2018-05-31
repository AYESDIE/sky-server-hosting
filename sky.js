var express     = require("express"),
    app         = express();

app.set("view engine", "ejs");
app.get("/", function(req, res){
    res.render("landing");
});

app.get("/face", function(req, res){
    res.render("new");
});

app.get("/about", function(req,res) {
    res.render("about");
});

app.get("*", function(req,res) {
    res.redirect("landing");
});

app.listen(8080, function() {
    console.log("SERVER IS UP at http://localhost:8080/");
} );