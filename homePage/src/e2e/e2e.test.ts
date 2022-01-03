import puppeteer from "puppeteer";
import { getDocument, queries, waitFor } from "pptr-testing-library"

let browser: puppeteer.Browser
let page: puppeteer.Page
const { getByTestId, getByLabelText, getByRole } = queries

const isDebugging = () => {
    const debugging_mode = {
        headless: false,
        slowMo: 250,
        devtools: true
    }
    return process.env.NODE_ENV === 'test' ? debugging_mode : {}
}

beforeAll(async () => {
    browser = await puppeteer.launch(isDebugging())
    page = await browser.newPage()
    await page.goto('http://localhost:3001')
}, 30000)

afterAll(async () => {
    await browser.close()
}, 30000)
describe("Products", () => {
    it("should react to language change", async () => {
        // Grab ElementHandle for document
        const $document = await getDocument(page)

        // Click on language dropdown and select fr
        let selection = await getByTestId($document, 'input')
        await selection.click()
        await selection.select('fr')

        // Check if header changed languages
        await page.waitForSelector("[data-testid='header']");
        let html = await page.$eval('[data-testid="header"]', (e) => e.innerHTML)
        expect(html).toContain("Des Produits");
    }, 50000);

    it("should react to search input", async () => {
        // Grab ElementHandle for document
        const $document = await getDocument(page)
        let result;

        // type in flutter in the input
        let input = await getByTestId($document, 'search-input')
        await input.type('flutter')

        // Wait for UI to update and assert it to hae 1 product
        await page.waitForSelector("[data-testid='products']");
        await page.waitForSelector("[data-testid='products-label']");
        let html = await page.$eval('[data-testid="products-label"]', (e) => e.innerHTML)
        expect(html).toContain("Count des Products : 1");

    }, 50000);

})