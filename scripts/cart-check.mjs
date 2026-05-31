import puppeteer from "puppeteer-core";
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const b = await puppeteer.launch({ executablePath: CHROME, headless: "new",
  defaultViewport: { width: 1440, height: 900, deviceScaleFactor: 1 }, args: ["--no-sandbox","--hide-scrollbars"] });
const p = await b.newPage();
await p.goto("http://localhost:3000/products/the-oil", { waitUntil: "networkidle0" });
await p.evaluate(()=>[...document.querySelectorAll('button')].find(x=>/add to bag/i.test(x.textContent))?.click());
await new Promise(r=>setTimeout(r,700));
const drawer = await p.evaluate(()=>document.querySelector('aside h2')?.textContent||"none");
const item = await p.evaluate(()=>document.querySelector('aside h3')?.textContent||"none");
// pillar card navigation from home
await p.goto("http://localhost:3000", { waitUntil: "networkidle0" });
await p.evaluate(()=>document.getElementById('pillars')?.scrollIntoView());
await new Promise(r=>setTimeout(r,400));
await p.evaluate(()=>document.querySelector('#pillars a[href^="/products/"]')?.click());
await new Promise(r=>setTimeout(r,1000));
console.log(JSON.stringify({ drawer, item, pillarNav: p.url() }));
await b.close();
