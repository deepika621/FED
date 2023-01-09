const http = require("http");
console.log("Hello World 1")
http.createServer((req, res)=>{
    console.log("Hello World 2")
    res.end("Welcome to NodeJS Server");
}).listen(4100);
console.log("Hello World 3")