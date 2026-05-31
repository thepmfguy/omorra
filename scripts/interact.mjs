import puppeteer from "puppeteer-core";
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const b = await puppeteer.launch({ executablePath: CHROME, headless: "new",
  defaultViewport: { width: 1440, height: 900, deviceScaleFactor: 1 }, args: ["--no-sandbox","--hide-scrollbars"] });
const p = await b.newPage();

// 1) Card add-to-bag should NOT navigate
await p.goto("http://localhost:3000", { waitUntil: "networkidle0" });
await p.evaluate(() => document.getElementById("collection")?.scrollIntoView({block:"center"}));
await new Promise(r=>setTimeout(r,500));
// hover first card to reveal button, then click its Add to bag
const card = await p.$("#collection article");
await card.hover();
await new Promise(r=>setTimeout(r,400));
const addBtn = await p.evaluateHandle(() => [...document.querySelectorAll("#collection article button")].find(x=>/add to bag/i.test(x.textContent)));
await addBtn.asElement().click();
await new Promise(r=>setTimeout(r,500));
const afterAdd = { url: p.url(), drawer: await p.evaluate(()=>document.querySelector('aside h2')?.textContent||"none") };

// close drawer
await p.evaluate(()=>[...document.querySelectorAll('button')].find(b=>/close/i.test(b.textContent))?.click());
await new Promise(r=>setTimeout(r,400));

// 2) Clicking the card body should navigate to PDP
await p.evaluate(() => { const a=document.querySelector('#collection article a[href^="/products/"]'); a && a.click(); });
await new Promise(r=>setTimeout(r,1200));
const afterClick = p.url();

// 3) PDP add to bag
await p.goto("http://localhost:3000/products/the-mist", { waitUntil: "networkidle0" });
await p.evaluate(()=>[...document.querySelectorAll('button')].find(b=>/add to bag/i.test(b.textContent))?.click());
await new Promise(r=>setTimeout(r,600));
const pdpDrawer = await p.evaluate(()=>document.querySelector('aside h2')?.textContent||"none");

console.log(JSON.stringify({ afterAdd, afterClick, pdpDrawer }, null, 2));
await b.close();
