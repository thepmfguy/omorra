import puppeteer from "puppeteer-core";
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const b = await puppeteer.launch({ executablePath: CHROME, headless: "new",
  defaultViewport: { width: 1440, height: 900, deviceScaleFactor: 2 }, args: ["--no-sandbox","--hide-scrollbars","--disable-http-cache"] });
const p = await b.newPage(); await p.setCacheEnabled(false);
const scrollAll = async () => p.evaluate(async () => { const h=document.body.scrollHeight; for(let y=0;y<=h;y+=350){window.scrollTo(0,y);await new Promise(r=>setTimeout(r,110));} window.scrollTo(0,0); await new Promise(r=>setTimeout(r,500)); });

await p.goto("http://localhost:3000", { waitUntil: "networkidle0" });
await scrollAll(); await scrollAll();
await new Promise(r=>setTimeout(r,800));
await p.screenshot({ path: "/tmp/c-home-full.png", fullPage: true });
await p.evaluate(()=>document.getElementById("ritual-kit")?.scrollIntoView({block:"start"}));
await new Promise(r=>setTimeout(r,700));
await p.screenshot({ path: "/tmp/c-ritualkit.png" });
await p.evaluate(()=>document.getElementById("nourish")?.scrollIntoView({block:"start"}));
await new Promise(r=>setTimeout(r,700));
await p.screenshot({ path: "/tmp/c-nourish.png" });

await p.goto("http://localhost:3000/products/ritual-kit-her", { waitUntil: "networkidle0" });
await scrollAll(); await new Promise(r=>setTimeout(r,700));
await p.screenshot({ path: "/tmp/c-kit-pdp.png" });

await p.goto("http://localhost:3000/products/moisturizer-men", { waitUntil: "networkidle0" });
await new Promise(r=>setTimeout(r,800));
await p.screenshot({ path: "/tmp/c-moist-pdp.png" });
await b.close(); console.log("done");
