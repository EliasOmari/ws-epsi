const puppeteer = require("puppeteer");

const URL = "https://www.beecome.io/"; // À lier avec le form
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

  data.cookies.forEach(cookie => {
    if (cookie.expires < Math.round(new Date().getTime() / 1000)) {
      cookie.cookieExpired = true;
    } else {
      cookie.cookieExpired = false;
    }
  });
  console.log(data);
}
main();
