import puppeteer from "puppeteer-core";
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const b = await puppeteer.launch({ executablePath: CHROME, headless: "new",
  defaultViewport: { width: 1440, height: 900, deviceScaleFactor: 2 }, args: ["--no-sandbox","--hide-scrollbars","--disable-http-cache"] });
const p = await b.newPage();
await p.setCacheEnabled(false);
await p.goto("http://localhost:3000", { waitUntil: "networkidle0" });
await new Promise(r=>setTimeout(r,1600));
await p.screenshot({ path: "/tmp/r-hero2.png" });
await b.close(); console.log("done");
