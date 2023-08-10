import prismaClient from "../../prisma";

const ApiNodeCorreios = require('node-correios');
const correios = new ApiNodeCorreios();

interface CalcFrete {
    nCdServico: string;
    sCepDestino: string;
    nVlPeso: number;
    nCdFormato: number;
    nVlComprimento: number;
    nVlAltura: number;
    nVlLargura: number;
}

class FindFreteCalculoService {
    async execute({
        nCdServico,
        sCepDestino,
        nVlPeso,
        nCdFormato,
        nVlComprimento,
        nVlAltura,
        nVlLargura
    }: CalcFrete) {

        const store = await prismaClient.store.findFirst();

        const calcFrete = correios.calcPrecoPrazo({
            nCdEmpresa: process.env.ADM_CORREIOS,
            sDsSenha: process.env.PASS_CORREIOS,
            nCdServico: nCdServico,
            sCepOrigem: store.cep,
            sCepDestino: sCepDestino,
            nVlPeso: nVlPeso,
            nCdFormato: nCdFormato,
            nVlComprimento: nVlComprimento,
            nVlAltura: nVlAltura,
            nVlLargura: nVlLargura
        });

        return calcFrete

    }
}

export { FindFreteCalculoService }