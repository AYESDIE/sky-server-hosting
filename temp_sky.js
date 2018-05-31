var express     = require("express"),
    app         = express(),
    spawn       = require('child_process').spawn,
    py          = spawn('python', ['moon/sa.py']),
    data        = ["http://www.gstatic.com/tv/thumb/persons/835149/835149_v9_bb.jpg"],
    dataString  = '';


app.get("/", function(req,res) {
    py.stdout.on('data', function(data){
        dataString += data.toString();
        console.log(dataString);
    });
    py.stdout.on('end', function(){
        console.log('{FACE: ',dataString,'}');
    });
    py.stdin.write(JSON.stringify(data));
    py.stdin.end();
    res.send("osk");
});



app.get("*", function(req,res) {
    res.redirect("/");
});

app.listen(3000, function() {
    console.log("SERVER IS UP at http://localhost:8080/");
} );