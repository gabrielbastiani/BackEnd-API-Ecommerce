import prismaClient from "../../prisma";

interface VariacaoRequest {
    variacao_id: any;
    order: number;
    descriptionVariacao1: string;
    descriptionVariacao2: string;
    descriptionVariacao3: string;
    descriptionVariacao4: string;
    descriptionVariacao5: string;
    descriptionVariacao6: string;
    preco: number;
    promocao: number;
    skuVariacao: string;
    estoqueVariacao: number;
    pesoKg: string;
    larguraCm: string;
    alturaCm: string;
    profundidadeCm: string;
    quantidade: number;
    product_id: string;
    store_id: string;
}

class UpdateAllDateVariacaoService {
    async execute({
        variacao_id,
        order,
        descriptionVariacao1,
        descriptionVariacao2,
        descriptionVariacao3,
        descriptionVariacao4,
        descriptionVariacao5,
        descriptionVariacao6,
        preco,
        promocao,
        skuVariacao,
        estoqueVariacao,
        pesoKg,
        larguraCm,
        alturaCm,
        profundidadeCm,
        quantidade,
        product_id,
        store_id
    }: VariacaoRequest) {
        const updateVariacao = await prismaClient.variacao.update({
            where: {
                id: String(variacao_id)
            },
            data: {
                order: order,
                descriptionVariacao1: descriptionVariacao1,
                descriptionVariacao2: descriptionVariacao2,
                descriptionVariacao3: descriptionVariacao3,
                descriptionVariacao4: descriptionVariacao4,
                descriptionVariacao5: descriptionVariacao5,
                descriptionVariacao6: descriptionVariacao6,
                preco: preco,
                promocao: promocao,
                skuVariacao: skuVariacao,
                estoqueVariacao: estoqueVariacao,
                pesoKg: pesoKg,
                larguraCm: larguraCm,
                alturaCm: alturaCm,
                profundidadeCm: profundidadeCm,
                quantidade: quantidade,
                product_id: product_id,
                store_id: store_id
            }
        })

        return updateVariacao;

    }
}

export { UpdateAllDateVariacaoService }