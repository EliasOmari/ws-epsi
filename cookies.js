const puppeteer = require("puppeteer");

const URL = "https://serverfault.com/";
async function main() {
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
  });
  const page = await browser.newPage();

  await page.goto(URL);

  var data = await page._client.send("Network.getAllCookies");

  // Pour récupérer le nom du premier cookie
  console.log(data.cookies[0].name);

  // Pour récupérer tous les noms des cookies
  data.cookies.forEach((cookie) => {
      console.log("nom : ", cookie.name);
  })

  // Et après on fait la même chose pour le reste...
}
main();
