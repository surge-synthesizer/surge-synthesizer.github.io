import { mkdir } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import puppeteer from "puppeteer";

(async () => {
    const outdir = resolve(dirname(import.meta.dirname), "../", "dist");
    const outfile = resolve(outdir, "Surge-XT-Manual.pdf");

    const browser = await puppeteer.launch();
    const browser_version = await browser.version();

    console.log(`${browser_version}: Printing PDF file to ${outfile}`);

    const page = await browser.newPage();

    const url = process.env.CI
        ? "https://surge-synthesizer.github.io/manual-xt/"
        : "http://localhost:4321/manual-xt/";

    await mkdir(outdir, { recursive: true });

    try {
        await page.goto(url, { waitUntil: "networkidle0" });

        await page.pdf({
            path: outfile,
            format: "A4",
            margin: { top: "32px", bottom: "64px", left: "32px", right: "32px" },
            displayHeaderFooter: true,
        });

        await browser.close();
    } catch {
        process.exit(1);
    }
})();
