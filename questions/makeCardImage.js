const puppeteer = require("puppeteer");
const katex = require('katex');

async function makeCardImage(currentCard) {
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css">
        <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.js"></script>
        <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/contrib/auto-render.min.js"></script>
        <style>
          .card { width: 900px; padding: 32px; background: #313338; }
          .section { font-size: 28px; line-height: 1.5; margin-bottom: 24px; }
          #image { color: white; white-space: pre-wrap;}
        </style>
      </head>
      <body>
        <div class="card">
          <div id="image" class="section"></div>
        </div>

        <script>
          const currentCard = ${JSON.stringify(currentCard)};

          const imageEl = document.getElementById("image");
          imageEl.textContent = currentCard;

          function renderWhenReady() {
            if (typeof renderMathInElement !== "function") {
              setTimeout(renderWhenReady, 50);
              return;
            }

            renderMathInElement(imageEl, {
              delimiters: [
                { left: "$$", right: "$$", display: true },
                { left: "\\\\[", right: "\\\\]", display: true },
                { left: "\\\\(", right: "\\\\)", display: false }
              ],
              throwOnError: false
            });

            window.KATEX_DONE = true;
          }

          renderWhenReady();
        </script>

      </body>
    </html>
  `;

  const browser = await puppeteer.launch({
    executablePath: '/usr/bin/chromium',
    args: [
      '--no-sandbox', 
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage' 
    ],
  });
  
  const page = await browser.newPage();

  await page.setViewport({ width: 1000, height: 1200, deviceScaleFactor: 2 });
  await page.setContent(html, { waitUntil: "networkidle0" });
  await page.waitForFunction(() => window.KATEX_DONE === true);

  const card = await page.$(".card");
  await card.screenshot({ path: "card.png" });

  await browser.close();

  return "card.png";
}

module.exports = makeCardImage;
