let http = require("http");
let url = require("url");

function start() {
  function onRequest(req, res) {
    let pathname = url.parse(req.url).pathname;

    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("Hello Node.js");
    res.end();
  }
  http.createServer(onRequest).listen(8888);
}

exports.start = start;
