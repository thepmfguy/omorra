import puppeteer from "puppeteer-core";
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const b = await puppeteer.launch({ executablePath: CHROME, headless: "new",
  defaultViewport: { width: 1440, height: 900, deviceScaleFactor: 2 }, args: ["--no-sandbox","--hide-scrollbars"] });
const p = await b.newPage();
await p.goto("http://localhost:3000", { waitUntil: "networkidle0" });
// Scroll to collection and hover-add first product
await p.evaluate(() => document.getElementById("collection")?.scrollIntoView({block:"start"}));
await new Promise(r=>setTimeout(r,500));
// Click the first "Add to bag" button found
const clicked = await p.evaluate(() => {
  const btns = [...document.querySelectorAll("button")].filter(x=>/add to bag/i.test(x.textContent));
  if (btns[0]) { btns[0].click(); return btns[0].textContent.trim(); }
  return null;
});
await new Promise(r=>setTimeout(r,900));
await p.screenshot({ path: "/tmp/omorra-cart.png" });
const count = await p.evaluate(() => document.querySelector('aside h2')?.textContent || "no-drawer");
console.log("clicked:", clicked, "| drawer:", count);
await b.close();
