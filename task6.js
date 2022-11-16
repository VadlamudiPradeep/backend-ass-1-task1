


// require('http').createServer(function(req, res) {
//     // res.writeHead(200, {'Content-Type': 'text/plain'});
//     console.log(req.url , re.method, req.headers)
//     res.end('pradeep');
//   res.setHeader('Content-Type', 'text/html')
//   res.write('<html>');
//   res.write('<head><title>My First Page</title></head>')
//   res.write('<body><h1>Hello from my NodeJs Server!</h1></body>')
//   res.write('</html>')
//   res.end();
   
// }).listen(3000); 

// const http = require("http");
// const host = 'localhost';
// const port = 4000;
// const requestListener = function (req, res) {
 //   res.writeHead(200);
// 

/*    */

// 
// const http = require('http');

// const server = http.createServer((req , res)=>{
//     res.setHeader('Content-Type', 'text/html');
//     res.write('<html>')
//     res.write('<head><title>My First Page</title></head>');
//     res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
//     res.write('</html>');
//     res.end();
// })

// server.listen(3000);

// const http =  require('http');
const http = require('http');

const server = http.createServer((req , res)=>{
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>')
    res.write('<head><title>My First Page</title></head>');
    res.write('<body>');
    res.write('<h1>Welcome home</h1>')
    res.write('<h2>Welcome to About Us page</h2>')
    res.write('<h3>Welcome to my Node Js project</h3>')
    res.write('</body>')
    res.write('</html>');
    res.end();
})

server.listen(3000);