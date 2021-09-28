const http = require('http')
const url = require('url')
const fs = require('fs')
const querystring = require('querystring')

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((request, response) => {
    if (request.method == 'GET') {
        fs.readFile(__dirname + request.url, (error, data) => {
            if (error) {
                response.writeHead(404)
                response.end()
            } else {
                response.writeHead(200, {"Content-Type": "text/html"})
                response.write(data, "utf8")
                response.end()
            }
        })
    } else if (request.method == 'POST') {
        var body = ''

        request.on('data', (data) => {
            body += data

        if (body.length > 1e6)
            request.connection.destroy()
        })

        request.on('end', () => {
            var post = querystring.parse(body)
            console.log(post)
        })
    }
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})
