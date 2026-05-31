import puppeteer from "puppeteer-core";

const CHROME =
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

const shots = [
  { name: "01-hero", y: 0 },
  { name: "02-philosophy", sel: "section:nth-of-type(1)" },
];

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "new",
  defaultViewport: { width: 1440, height: 900, deviceScaleFactor: 2 },
  args: ["--no-sandbox", "--hide-scrollbars"],
});

const page = await browser.newPage();
await page.goto("http://localhost:3000", { waitUntil: "networkidle0" });

// Scroll through the whole page slowly to trigger every lazy image + reveal.
await page.evaluate(async () => {
  const step = 400;
  const h = document.body.scrollHeight;
  for (let y = 0; y <= h; y += step) {
    window.scrollTo(0, y);
    await new Promise((r) => setTimeout(r, 120));
  }
  window.scrollTo(0, 0);
  await new Promise((r) => setTimeout(r, 400));
});

// Let reveals settle.
await new Promise((r) => setTimeout(r, 1200));

// Full page.
await page.screenshot({ path: "/tmp/omorra-fullpage.png", fullPage: true });

// Section close-ups by id.
const ids = ["collection", "sourcing", "ritual"];
for (const id of ids) {
  await page.evaluate((i) => {
    document.getElementById(i)?.scrollIntoView({ behavior: "instant", block: "start" });
  }, id);
  await new Promise((r) => setTimeout(r, 700));
  await page.screenshot({ path: `/tmp/omorra-${id}.png` });
}

await browser.close();
console.log("done");
