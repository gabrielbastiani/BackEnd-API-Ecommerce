import prismaClient from "../../../prisma";
import { calcularPrecoPrazo } from 'correios-brasil';

interface CarrinhoRequest {
    product_id: string;
    variacao_id: string;
    quantidade: number;
    precoUnitario: string;
    custoEntrega: string;
    prazoEntrega: string;
    tipoEntrega: string;
    valorPagamento: string;
    loja_id: string;
}

class CreateCarrinhoService {
    async execute({
        product_id,
        variacao_id,
        quantidade,
        precoUnitario,
        loja_id
    }: CarrinhoRequest) {
        const carrinho = await prismaClient.carrinho.create({
            data: {
                loja_id: loja_id
            },
            select: {
                id: true,
                itens: true,
                custoEntrega: true,
                prazoEntrega: true,
                tipoEntrega: true,
                valorPagamento: true,
                created_at: true,
                loja_id: true,
            }
        })

        const carrinhoID = await prismaClient.carrinho.findFirst({
            where: {
                id: carrinho.id
            }
        })

        const item = await prismaClient.item.create({
            data: {
                product_id: product_id,
                variacao_id: variacao_id,
                quantidade: quantidade,
                precoUnitario: precoUnitario,
                carrinho_id: carrinhoID.id
            },
            select: {
                id: true,
                carrinho_id: true,
                product_id: true,
                variacao_id: true,
                quantidade: true,
                precoUnitario: true
            }
        })

        const product = await prismaClient.variacao.findUnique({
            where: {
                id: item.variacao_id
            }
        })

        const pesoProdu = product.pesoKg;
        const comprProduc = product.profundidadeCm;
        const altuProduc = product.alturaCm;
        const largProduc = product.larguraCm;

        const args = {
            // Não se preocupe com a formatação dos valores de entrada do cep, qualquer uma será válida (ex: 21770-200, 21770 200, 21asa!770@###200 e etc),
            sCepOrigem: '95034100',
            sCepDestino: '90050290',
            nVlPeso: pesoProdu,
            nCdFormato: '1',
            nVlComprimento: comprProduc,
            nVlAltura: altuProduc,
            nVlLargura: largProduc,
            nCdServico: ['04014', '04510'], //Array com os códigos de serviço
            nVlDiametro: '0',
          };
          
          calcularPrecoPrazo(args).then(response => {
            console.log(response);
          });

        /* const carrinhoUpdte = await prismaClient.carrinho.update({
            where: {
                id: String(carrinhoID)
            },
            data: {
                custoEntrega: custoEnt,
                prazoEntrega: prazoEnt,
                tipoEntrega: tipoEntr,
                valorPagamento: valorPag
            }
        }) */

        return ([item, carrinho]);

    }
}


export { CreateCarrinhoService }