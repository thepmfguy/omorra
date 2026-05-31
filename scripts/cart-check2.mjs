import puppeteer from "puppeteer-core";
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const b = await puppeteer.launch({ executablePath: CHROME, headless: "new",
  defaultViewport: { width: 1440, height: 900, deviceScaleFactor: 1 }, args: ["--no-sandbox","--hide-scrollbars"] });
const p = await b.newPage();
// add kit from home ritual-kit section
await p.goto("http://localhost:3000", { waitUntil: "networkidle0" });
await p.evaluate(()=>document.getElementById("ritual-kit")?.scrollIntoView());
await new Promise(r=>setTimeout(r,500));
await p.evaluate(()=>[...document.querySelectorAll('#ritual-kit button')].find(x=>/add the kit/i.test(x.textContent))?.click());
await new Promise(r=>setTimeout(r,700));
const d1 = await p.evaluate(()=>document.querySelector('aside h2')?.textContent||"none");
const i1 = await p.evaluate(()=>document.querySelector('aside h3')?.textContent||"none");
// close, then add a gendered product from PDP
await p.evaluate(()=>[...document.querySelectorAll('button')].find(x=>/close/i.test(x.textContent))?.click());
await new Promise(r=>setTimeout(r,300));
await p.goto("http://localhost:3000/products/face-wash-women", { waitUntil: "networkidle0" });
await p.evaluate(()=>[...document.querySelectorAll('button')].find(x=>/add to bag/i.test(x.textContent))?.click());
await new Promise(r=>setTimeout(r,600));
const d2 = await p.evaluate(()=>document.querySelector('aside h2')?.textContent||"none");
console.log(JSON.stringify({ kitDrawer:d1, kitItem:i1, productDrawer:d2 }));
await b.close();
