import puppeteer from "puppeteer-core";
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const b = await puppeteer.launch({ executablePath: CHROME, headless: "new",
  defaultViewport: { width: 1440, height: 900, deviceScaleFactor: 2 }, args: ["--no-sandbox","--hide-scrollbars"] });
const p = await b.newPage();
const scrollAll = async () => p.evaluate(async () => { const h=document.body.scrollHeight; for(let y=0;y<=h;y+=350){window.scrollTo(0,y);await new Promise(r=>setTimeout(r,90));} window.scrollTo(0,0); await new Promise(r=>setTimeout(r,500)); });

await p.goto("http://localhost:3000", { waitUntil: "networkidle0" });
await new Promise(r=>setTimeout(r,1500));
await p.screenshot({ path: "/tmp/r-hero.png" });
await scrollAll();
await new Promise(r=>setTimeout(r,600));
await p.evaluate(() => document.getElementById("pillars")?.scrollIntoView({block:"start"}));
await new Promise(r=>setTimeout(r,800));
await p.screenshot({ path: "/tmp/r-pillars.png" });
await p.screenshot({ path: "/tmp/r-home-full.png", fullPage: true });

await p.goto("http://localhost:3000/our-story", { waitUntil: "networkidle0" });
await scrollAll();
await new Promise(r=>setTimeout(r,600));
await p.screenshot({ path: "/tmp/r-story.png", fullPage: true });

await p.goto("http://localhost:3000/products/the-mala", { waitUntil: "networkidle0" });
await scrollAll();
await new Promise(r=>setTimeout(r,700));
await p.screenshot({ path: "/tmp/r-pdp.png" });

await b.close(); console.log("shot3 done");
