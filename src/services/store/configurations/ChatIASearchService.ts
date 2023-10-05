import puppeteer from 'puppeteer';

interface IARequest {
    searchText: string;
}

class ChatIASearchService {
    async execute({ searchText }: IARequest) {

        const browser = await puppeteer.launch({ headless: false });
        let page = await browser.newPage();

        await page.goto('https://www.bing.com/search?form=MY0291&OCID=MY0291&q=Bing+AI&showconv=1');

        await page.waitForTimeout(10000);

        const buttonId = 'bnp_btn_accept';
        await page.click(`button[id=${buttonId}]`);

        await page.waitForTimeout(5000);

        await page.waitForSelector('div[aria-label="Mais tarde"]');
        await page.click('div[aria-label="Mais tarde"]');

        await page.waitForTimeout(5000);

        /* await page.waitForSelector(".get-started-btn-inline"), */
        await page.click('button[class=".get-started-btn-inline"]'),

        await page.waitForTimeout(5000);

        const textareaId = 'searchbox';
        const textareaElement = await page.$(`textarea#${textareaId}`);

        await textareaElement.type(searchText);
        await page.waitForTimeout(2000);

        const buttonType = await page.$('button[type="send"]');

        await buttonType.click();


        /* await page.type('textarea[name=searchbox]', searchText, { delay: 200 }); */


        // Selecione o elemento <textarea> pelo seu ID


        /* await browser.close(); */

        /* return data; */

    }
}

export { ChatIASearchService }