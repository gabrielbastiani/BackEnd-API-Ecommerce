import prismaClient from "../../prisma";

interface VariacaoRequest {
    nameVariacao: string;
    descriptionVariacao1: string;
    descriptionVariacao2: string;
    descriptionVariacao3: string;
    descriptionVariacao4: string;
    descriptionVariacao5: string;
    descriptionVariacao6: string;
    priceVariacao: string;
    skuVariacao: string;
    estoqueVariacao: string;
    pesoKGVariacao: string;
    larguraCMVariacao: string;
    alturaCMVariacao: string;
    profundidadeCMVariacao: string;
    disponibilidadeVariacao: boolean;
    promocaoVariacao: string;
    EntregaGratisVariacao: boolean;
    product_id: string;
    loja_id: string;
}

class CreateVariacaoService {
    async execute({
        nameVariacao,
        descriptionVariacao1,
        descriptionVariacao2,
        descriptionVariacao3,
        descriptionVariacao4,
        descriptionVariacao5,
        descriptionVariacao6,
        priceVariacao,
        skuVariacao,
        estoqueVariacao,
        pesoKGVariacao,
        larguraCMVariacao,
        alturaCMVariacao,
        profundidadeCMVariacao,
        disponibilidadeVariacao,
        promocaoVariacao,
        entregaGratisVariacao,
        product_id,
        loja_id
    }: VariacaoRequest) {

        const variacao = await prismaClient.variacao.create({
            data: {
                nameVariacao: nameVariacao,
                descriptionVariacao1: descriptionVariacao1,
                descriptionVariacao2: descriptionVariacao2,
                descriptionVariacao3: descriptionVariacao3,
                descriptionVariacao4: descriptionVariacao4,
                descriptionVariacao5: descriptionVariacao5,
                descriptionVariacao6: descriptionVariacao6,
                priceVariacao: priceVariacao,
                skuVariacao: skuVariacao,
                estoqueVariacao: estoqueVariacao,
                pesoKGVariacao: pesoKGVariacao,
                larguraCMVariacao: larguraCMVariacao,
                alturaCMVariacao: alturaCMVariacao,
                profundidadeCMVariacao: profundidadeCMVariacao,
                disponibilidadeVariacao: disponibilidadeVariacao,
                promocaoVariacao: promocaoVariacao,
                entregaGratisVariacao: entregaGratisVariacao,
                product_id: product_id,
                loja_id: loja_id
            },
            select: {
                id: true,
                nameVariacao: true,
                descriptionVariacao1: true,
                descriptionVariacao2: true,
                descriptionVariacao3: true,
                descriptionVariacao4: true,
                descriptionVariacao5: true,
                descriptionVariacao6: true,
                priceVariacao: true,
                skuVariacao: true,
                estoqueVariacao: true,
                pesoKGVariacao: true,
                larguraCMVariacao: true,
                alturaCMVariacao: true,
                profundidadeCMVariacao: true,
                disponibilidadeVariacao: true,
                promocaoVariacao: true,
                entregaGratisVariacao: true,
                created_at: true,
                product_id: true,
                loja_id: true,
                photovariacoes: true,
            }
        })

        return variacao;

    }
}

export { CreateVariacaoService }