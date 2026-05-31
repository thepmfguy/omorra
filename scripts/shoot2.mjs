import puppeteer from "puppeteer-core";
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const b = await puppeteer.launch({ executablePath: CHROME, headless: "new",
  defaultViewport: { width: 1440, height: 900, deviceScaleFactor: 2 }, args: ["--no-sandbox","--hide-scrollbars"] });
const p = await b.newPage();
const scrollAll = async () => p.evaluate(async () => { const h=document.body.scrollHeight; for(let y=0;y<=h;y+=350){window.scrollTo(0,y);await new Promise(r=>setTimeout(r,90));} window.scrollTo(0,0); await new Promise(r=>setTimeout(r,400)); });

// Home hero
await p.goto("http://localhost:3000", { waitUntil: "networkidle0" });
await new Promise(r=>setTimeout(r,1400));
await p.screenshot({ path: "/tmp/v2-hero.png" });

// PDP top
await p.goto("http://localhost:3000/products/the-mat", { waitUntil: "networkidle0" });
await scrollAll();
await new Promise(r=>setTimeout(r,900));
await p.screenshot({ path: "/tmp/v2-pdp-top.png" });
// PDP full
await p.screenshot({ path: "/tmp/v2-pdp-full.png", fullPage: true });

await b.close(); console.log("shot2 done");
