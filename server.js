const http = require("http"); //load http module coz its imp to num server

const server = http.createServer((req, res) => {
  //creating response
  res.end("hello its me manish magaju and i live in chhaling");
});

server.listen(5000, () => {
  console.log("port running at 5000");
});
