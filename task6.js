


// require('http').createServer(function(req, res) {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('pradeep');
//     console.log(res)
// }).listen(4000); 

const http = require("http");
const host = 'localhost';
const port = 4000;
const requestListener = function (req, res) {
 //   res.writeHead(200);
    res.end("My name  is pradeep");
};


const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});