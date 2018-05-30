var express     = require("express"),
    app         = express(),
    spawn       = require('child_process').spawn,
    py          = spawn('python', ['moon/moon.py']),
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
    res.send("ok");
});


app.get("*", function(req,res) {
    res.send("stop it , get some help!");
});

app.listen(3000, function() {
    console.log("SERVER IS UP at http://localhost:3000/");
} );