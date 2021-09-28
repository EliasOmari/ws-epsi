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

  const response = await page.goto(URL);
  const securityDetails = response.securityDetails();
  const validFrom = securityDetails.validFrom() * 1000;
  const expiryDate = securityDetails.validTo() * 1000;
  console.log(new Date(validFrom));
  console.log(new Date(expiryDate));

  console.log(securityDetails.issuer());
}
main();
