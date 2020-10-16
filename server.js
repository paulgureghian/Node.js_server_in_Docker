// Created by Paul A. Gureghian in Oct 2020
// This node.js server will be deployed in a Docker container

const http = require('http');

const server = http.createServer(function(req, res) {

    res.write('Hi from Docker');
    res.end();
})

server.listen(3000, function() {

    console.log('Server in Docker started on port 3000');
});
