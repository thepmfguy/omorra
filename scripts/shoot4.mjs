import puppeteer from "puppeteer-core";
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const b = await puppeteer.launch({ executablePath: CHROME, headless: "new",
  defaultViewport: { width: 1440, height: 900, deviceScaleFactor: 2 }, args: ["--no-sandbox","--hide-scrollbars","--disable-http-cache"] });
const p = await b.newPage();
await p.setCacheEnabled(false);
const scrollAll = async () => p.evaluate(async () => { const h=document.body.scrollHeight; for(let y=0;y<=h;y+=350){window.scrollTo(0,y);await new Promise(r=>setTimeout(r,100));} window.scrollTo(0,0); await new Promise(r=>setTimeout(r,500)); });

await p.goto("http://localhost:3000", { waitUntil: "networkidle0" });
await scrollAll(); await scrollAll();
await new Promise(r=>setTimeout(r,800));
await p.screenshot({ path: "/tmp/r-home-full2.png", fullPage: true });
await p.evaluate(() => document.getElementById("pillars")?.scrollIntoView({block:"start"}));
await new Promise(r=>setTimeout(r,800));
await p.screenshot({ path: "/tmp/r-pillars2.png" });

await p.goto("http://localhost:3000/our-story", { waitUntil: "networkidle0" });
await scrollAll();
await p.screenshot({ path: "/tmp/r-story2.png", fullPage: true });

await p.goto("http://localhost:3000/products/the-mala", { waitUntil: "networkidle0" });
await scrollAll(); await new Promise(r=>setTimeout(r,700));
await p.screenshot({ path: "/tmp/r-pdp2.png" });
await b.close(); console.log("done");
