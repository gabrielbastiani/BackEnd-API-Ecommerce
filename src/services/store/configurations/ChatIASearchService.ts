import puppeteer from 'puppeteer';

interface IARequest {
    searchText: string;
}

class ChatIASearchService {
    async execute({ searchText }: IARequest) {

        console.log(searchText)

        const browser = await puppeteer.launch({ headless: false });
        let page = await browser.newPage();

        await page.goto('https://www.perplexity.ai/');

        await page.waitForTimeout(5000);

        await page.type('textarea', searchText, { delay: 100 });

        await page.waitForTimeout(5000);

        await page.keyboard.press("Enter");

        const [tab1, tab2] = await browser.pages();

        const response: any = await tab2.$$eval('li', result => result.map((item) => {
            return item.innerText;
        }));


        console.log(response)


        /* await browser.close(); */

        /* return data; */

    }
}

export { ChatIASearchService }