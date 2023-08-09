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
    nVlDiametro: number;
}

class FindFreteCalculoService {
    async execute({
        nCdServico,
        sCepDestino,
        nVlPeso,
        nCdFormato,
        nVlComprimento,
        nVlAltura,
        nVlLargura,
        nVlDiametro,
    }: CalcFrete) {

        const store = await prismaClient.store.findFirst();

        const calcFrete = correios.calcPreco({
            nCdEmpresa: "20170548",
            sDsSenha: "sumig20",
            nCdServico: nCdServico,
            sCepOrigem: store.cep,
            sCepDestino: sCepDestino,
            nVlPeso: nVlPeso,
            nCdFormato: nCdFormato,
            nVlComprimento: nVlComprimento,
            nVlAltura: nVlAltura,
            nVlLargura: nVlLargura,
            nVlDiametro: nVlDiametro
        });

        return calcFrete;

    }
}

export { FindFreteCalculoService }