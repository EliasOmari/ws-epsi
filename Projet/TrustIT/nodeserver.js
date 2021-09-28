const http = require('http')
const url = require('url')
const fs = require('fs')

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((request, response) => {
    fs.readFile(__dirname + request.url, function(error, data) {
        if (error) {
            response.writeHead(404)
            response.end()
        }
        else {
            response.writeHead(200, {"Content-Type": "text/html"})
            response.write(data, "utf8")
            response.end()
        }
    })
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})
