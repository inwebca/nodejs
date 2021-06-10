const Http = require("http");
const Logger = require("./logger");

const logger = new Logger();
logger.on("test", (args) => console.log("test1111", args));
logger.log("test");

const server = Http.createServer((req, res) => {
if(req.url === '/'){
    res.write('hello');
    res.end();
}
});

server.listen(3000);

console.log("port 3000");
