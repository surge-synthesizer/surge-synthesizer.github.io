import { mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import puppeteer from "puppeteer";

(async () => {
    const outdir = resolve(dirname(import.meta.dirname), "../", "dist");
    const browser = await puppeteer.launch();
    console.log(await browser.version());

    const page = await browser.newPage();

    const url =
        process.env.NODE_ENV === "production"
            ? "https://surge-synthesizer.github.io/manual-xt/"
            : "http://localhost:4321/manual-xt/";

    await page.goto(url, { waitUntil: "networkidle0" });

    mkdir(outdir, { recursive: true })
        .then(async () => {
            await page.pdf({
                path: resolve(outdir, "Surge-XT-Manual.pdf"),
                margin: { top: "32px", bottom: "64px", left: "32px", right: "32px" },
                printBackground: true,
                displayHeaderFooter: true,
                headerTemplate: "<div></div>",
                footerTemplate: `<div style='border-top: 1px solid #D4D4D4; width: 100%; margin: 0 256px; text-align: center; font-size: 16px; padding-top: 16px;'>
                        <span class='pageNumber'></span> <span>/</span> <span class='totalPages'></span>
                    </div>`,
                format: "A4",
            });

            await browser.close();
        })
        .catch(() => process.exit(1));
})();
