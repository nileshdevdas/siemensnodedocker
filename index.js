var express = require("express");
var cors  = require("cors");

/////////////////////
var app = express(); 
app.use(cors());
/////////////////////

// http://host:port/
app.get("/", function(request, response){
    console.log("Received a request .....");
    response.end("<h1>Thank you request Recieved </h1>");
})

console.log("Starting the Server......")
// a container will exit if it does not have  a wait for condition ? 
app.listen(3000);