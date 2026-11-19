const http = require("http");
//create http server
const server = http.createServer((req, res) => {
  res.writeHead(200, { 
    "Content-Type": "text/plain" 
});
  res.end("Hello World");
});
//start server
server.listen(1000, () => {
  console.log("Server running at http://localhost:1000");
});