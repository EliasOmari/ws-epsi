const fs = require('fs')
const http = require('http')
const puppeteer = require("puppeteer")
const querystring = require('querystring')
const url = require('url')

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((request, response) => {
    console.log(request.url)

    if (request.method == 'GET') {
        if (request.url == '/' ) {
            request.url = '/index.html'
        }

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
    } else if (request.method == 'POST' && request.url == '/recherche/') {
        var body = ''

        request.on('data', (data) => {
            body += data

        if (body.length > 1e6)
            request.connection.destroy()
        })

        request.on('end', () => {
            var post = querystring.parse(body)
            var url = post.oSaisie

        async function puppet() {
            const browser = await puppeteer.launch({
                ignoreDefaultArgs: ["--disable-extensions"],
                args: [
                    "--disable-gpu",
                    "--disable-dev-shm-usage",
                    "--disable-setuid-sandbox",
                    "--no-first-run",
                    "--no-sandbox",
                    "--no-zygote",
                    "--single-process"
                ]
            })

            const page = await browser.newPage()
            // const response = await page.goto(url)
            // const securityDetails = response.securityDetails()
            // const validFrom = securityDetails.validFrom() * 1000
            // const expiryDate = securityDetails.validTo() * 1000

            // console.log(new Date(validFrom));
            // console.log(new Date(expiryDate));
            // console.log(securityDetails.issuer());
        }
        puppet()

            response.writeHead(200, {"Content-Type": "application/json"})
            response.write("{}", "utf8")
            response.end()
        })
    }
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})
