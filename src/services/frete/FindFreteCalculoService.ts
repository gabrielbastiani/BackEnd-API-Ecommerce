import prismaClient from "../../prisma";
import puppeteer from 'puppeteer';

interface CalcFrete {
    sCepDestino: string;
    nVlPeso: string;
    nVlComprimento: string;
    nVlAltura: string;
    nVlLargura: string;
}

class FindFreteCalculoService {
    async execute({
        sCepDestino,
        nVlPeso,
        nVlComprimento,
        nVlAltura,
        nVlLargura
    }: CalcFrete) {

        const store = await prismaClient.store.findFirst();

        const browser = await puppeteer.launch();
        let page = await browser.newPage();

        await page.goto('https://www2.correios.com.br/sistemas/precosprazos/');

        await page.type('input[name=cepOrigem]', store.cep, { delay: 100 });

        await page.type('input[name=cepDestino]', sCepDestino, { delay: 100 });

        await page.select('.f4col', '04014');

        await page.click('.caixa');

        await page.select('select[name=embalagem1]', 'outraEmbalagem1');

        await page.waitForTimeout(2000);

        await page.waitForSelector('input')

        await page.type('input[name=Altura]', nVlAltura, { delay: 100 });

        await page.type('input[name=Largura]', nVlLargura, { delay: 100 });

        await page.type('input[name=Comprimento]', nVlComprimento, { delay: 100 });

        await page.select('select[name=peso]', nVlPeso);

        await page.click('input[name=Calcular]');

        await page.waitForTimeout(2000);

        const [tab1, tab2, tab3] = await browser.pages();

        await tab3.waitForTimeout(2000);

        const response: any = await tab3.$$eval('table tr td', tds => tds.map((td) => {
            return td.innerText;
        }));

        const resultados: object = {};
        for (let i = 0, j = response.length; i < j; i++) {
            resultados['pos' + (i + 1)] = response[i];
        }

        /* @ts-ignore */
        const days = resultados.pos3;
        /* @ts-ignore */
        const price = resultados.pos5.slice(3);

        var freteFormat = String(price);
        freteFormat = freteFormat + '';
        /* @ts-ignore */
        freteFormat = parseInt(freteFormat.replace(/[\D]+/g, ''));
        freteFormat = freteFormat + '';
        freteFormat = freteFormat.replace(/([0-9]{2})$/g, ",$1");

        if (freteFormat.length > 6) {
            freteFormat = freteFormat.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
        }
        if (freteFormat == 'NaN') freteFormat = '';
        const formatedPrice = freteFormat.replace(".", "");
        const formatedPricePonto = formatedPrice.replace(",", ".");

        let data = [
            {
                "PrazoEntrega": days,
                "Valor": formatedPricePonto
            }
        ]

        await browser.close();

        return data;

    }
}

export { FindFreteCalculoService }