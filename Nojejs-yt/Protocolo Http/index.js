const http = require('node:http')

http.createServer(function name(req, res) {
    res.end("Hello World")
}).listen(8081)

console.log("O Servidor esta Rodando!");
