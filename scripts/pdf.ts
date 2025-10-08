import { mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import puppeteer from "puppeteer";

(async () => {
    const dist = resolve(dirname(import.meta.dirname), `dist`);
    const filename = resolve(dist, `Surge-XT-Manual.pdf`);

    await mkdir(dist, { recursive: true });

    const browser = await puppeteer.launch();
    const browser_version = await browser.version();

    console.log(`${browser_version}: Printing PDF file to ${filename}`);

    const page = await browser.newPage();
    const url = `http://localhost:4321/manual-xt/`;

    try {
        await page.goto(url, { waitUntil: "networkidle0" });
        await page.pdf({
            path: filename,
            format: "A4",
            margin: { top: "32px", bottom: "64px", left: "32px", right: "32px" },
            displayHeaderFooter: true,
        });
        await browser.close();
    } catch {
        process.exit(1);
    }
})();
