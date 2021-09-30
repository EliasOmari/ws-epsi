const puppeteer = require("puppeteer");

const URL = "https://www.google.fr/"; // URL du form HTML à lier
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
  var certificatValide;
  var certificatExiste;
  var data_ssl = [];

  const response = await page.goto(URL);
  const securityDetails = response.securityDetails();

  if (securityDetails == null) {
    certificatExiste = false;
    certificatValide = false;
  } else {
    certificatExiste = true;
    data_ssl.securityDetails = securityDetails;
    data_ssl.securityDetails.expires < Math.round(new Date().getTime() / 1000)
      ? (certificatValide = false)
      : (certificatValide = true);
  }
  data_ssl.certificatValide = certificatValide;
  data_ssl.certificatExiste = certificatExiste;

  /* var arrayToString = JSON.stringify(Object.assign({}, data_ssl)); // convert array to string
  var stringToJsonObject = JSON.parse(arrayToString); // convert string to json object */

  console.log(stringToJsonObject);
  console.log(typeof stringToJsonObject);
  // Exemple pour afficher en front un truc du tableau data_ssl
  console.log("---");
  console.log("Autorité du certificat : ", data_ssl.securityDetails._issuer);
}
main();
