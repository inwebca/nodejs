const express = require("express");

const server = express();

server.get('/', (req, res) => {
    res.send('Hello');
});

server.get('/about', (req, res) => {
    res.send('About');
});

server.listen(3000, () => {
    console.log('server running');
})
