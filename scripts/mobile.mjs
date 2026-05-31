import puppeteer from "puppeteer-core";
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const b = await puppeteer.launch({ executablePath: CHROME, headless: "new",
  defaultViewport: { width: 390, height: 844, deviceScaleFactor: 2, isMobile: true }, args: ["--no-sandbox","--hide-scrollbars"] });
const p = await b.newPage();
await p.goto("http://localhost:3000", { waitUntil: "networkidle0" });
await p.evaluate(async () => { const h=document.body.scrollHeight; for(let y=0;y<=h;y+=300){window.scrollTo(0,y);await new Promise(r=>setTimeout(r,90));} window.scrollTo(0,0); await new Promise(r=>setTimeout(r,400)); });
await new Promise(r=>setTimeout(r,1000));
await p.screenshot({ path: "/tmp/omorra-mobile-hero.png" });
await p.evaluate(() => document.getElementById("collection")?.scrollIntoView({block:"start"}));
await new Promise(r=>setTimeout(r,700));
await p.screenshot({ path: "/tmp/omorra-mobile-collection.png" });
await b.close(); console.log("mobile done");
