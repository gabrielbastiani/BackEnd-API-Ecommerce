import puppeteer from 'puppeteer';

interface IARequest {
    searchText: string;
}

class ChatIASearchService {
    async execute({ searchText }: IARequest) {

        const browser = await puppeteer.launch({ headless: false });
        let page = await browser.newPage();

        await page.goto('https://www.perplexity.ai/');

        await page.waitForTimeout(4000);

        await page.type('textarea', searchText, { delay: 80 });

        await page.waitForTimeout(2000);

        await page.keyboard.press("Enter");

        await page.waitForTimeout(2000);

        const currentURL = page.url();

        await page.waitForTimeout(1000);

        await page.goto(currentURL);

        const response: any = await page.$$eval('span', result => result.map((item) => {
            return item.innerText;
        }));

        await page.waitForTimeout(2000);

        const removeFilter = JSON.stringify(response);

        let signalRepeat = removeFilter.replace(/[n2\n3\n4\n5\n6\\]/g, '');

        function removerSinais(texto: string) {
            var regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
            var textoSemSinais = texto.replace(regex, '');
            return textoSemSinais;
        }

        const removeSignals = removerSinais(signalRepeat);

        const errorWord = String("Where kowledge begisSet a focus for your sourcesUpload text or PDF files Up to  MB each Sig i to upload filesCTRL  Use Copilot for more comprehesive aswers askig");
        const errorWord1 = String("Where knowledge beginsSet a focus for your sourcesUpload text or PDF files Up to 4 25MB each Sign in to upload filesCTRL Use Copilot for more comprehensive answers asking");


        if (removeSignals === errorWord || removeSignals === errorWord1) {
            await browser.close();
            throw new Error("Ops... Ocorreu algum erro, por favor tente novamente.");
        }

        const retira1 = "Copy Lik";
        const retira2 = "Where knowledge beginsSet a focus for your sourcesUpload text or PDF files Up to  MB each Sign in to upload filesCTRL  Use Copilot for more comprehensive answers asking";
        const retira3 = "Not AccurateView SourcesCopy To ClipboardEdit QueryUpload text or PDF files Up to  MB each Sig i to upload filesCTRL  Use Copilot for more comprehesive aswers";

        const limpText = removeSignals.replace(retira1, "");
        const limpText2 = limpText.replace(retira2, "");

        const result = limpText2.replace(retira3, "");

        let data = {
            "resposta": result
        }

        await browser.close();

        return data;

    }
}

export { ChatIASearchService }