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
            var url = post.url
            var options = post.options

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
                await page.setDefaultNavigationTimeout(0)
                const responsepage = await page.goto(url)

                if (options == 2) {
                    const securityDetails = responsepage.securityDetails()

                    var certificatValide = false
                    var certificatExiste = false
                    var data_ssl = []

                    if (securityDetails != null) {
                        certificatExiste = true
                        data_ssl.securityDetails = securityDetails;
                        certificatValide = data_ssl.securityDetails.expires < Math.round(new Date().getTime() / 1000)
                        ? false : true
                    }

                    data_ssl.certificatValide = certificatValide
                    data_ssl.certificatExiste = certificatExiste

                    var arrayToString = JSON.stringify(Object.assign({}, data_ssl))
                } else if (options == 1) {
                    var data = await page._client.send("Network.getAllCookies")

                    data.cookies.forEach(cookie => {
                        cookie.cookieExpired = cookie.expires < Math.round(new Date().getTime() / 1000)
                        ? true : false
                    })

                    var arrayToString = JSON.stringify(Object.assign({}, data.cookies))
                }

                response.writeHead(200, {"Content-Type": "application/json"})
                response.write(arrayToString, "utf8")
                response.end()
            }
            puppet()
        })
    }
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})
