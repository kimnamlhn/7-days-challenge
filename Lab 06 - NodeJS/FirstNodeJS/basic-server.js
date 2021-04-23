var http = require("http");
var port = 3000;

var server = http.createServer(function(req, res){
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.write("Hello, This is the first webserver with Node JS");
    res.end();
});

server.listen(port, function(){
    console.log("server running on port 3000");
})
