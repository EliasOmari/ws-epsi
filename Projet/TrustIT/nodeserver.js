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
            console.log(post.oSaisie)

            response.writeHead(200, {"Content-Type": "application/json"})
            response.write(`{
  "cookies": [
    {
      "name": "prov",
      "value": "1ea3ed7d-1604-4f16-69e4-f13235103476",
      "domain": ".serverfault.com",
      "path": "/",
      "expires": 2682374401.645036,
      "size": 40,
      "httpOnly": true,
      "secure": false,
      "session": false,
      "priority": "Medium",
      "sameParty": false,
      "sourceScheme": "Secure",
      "sourcePort": 443
    },
    {
      "name": "_ga",
      "value": "GA1.2.218586659.1632907209",
      "domain": ".serverfault.com",
      "path": "/",
      "expires": 1695979209,
      "size": 29,
      "httpOnly": false,
      "secure": false,
      "session": false,
      "priority": "Medium",
      "sameParty": false,
      "sourceScheme": "Secure",
      "sourcePort": 443
    },
    {
      "name": "_gid",
      "value": "GA1.2.948062075.1632907209",
      "domain": ".serverfault.com",
      "path": "/",
      "expires": 1632993609,
      "size": 30,
      "httpOnly": false,
      "secure": false,
      "session": false,
      "priority": "Medium",
      "sameParty": false,
      "sourceScheme": "Secure",
      "sourcePort": 443
    },
    {
      "name": "_gat",
      "value": "1",
      "domain": ".serverfault.com",
      "path": "/",
      "expires": 1632907269,
      "size": 5,
      "httpOnly": false,
      "secure": false,
      "session": false,
      "priority": "Medium",
      "sameParty": false,
      "sourceScheme": "Secure",
      "sourcePort": 443
    }
  ]
}`, "utf8")
            response.end()
        })
    }
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})
