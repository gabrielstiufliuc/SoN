var http = require('http');

const PORT = 9000;
var server = http.createServer(handleRequests);
server.listen(PORT);

console.log(`Listening to http://localhost:${PORT}`);

function handleRequests(req, res) {
    console.log('+++ req.url', req.url);

    res.end();
}