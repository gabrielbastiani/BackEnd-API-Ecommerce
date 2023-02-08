import prismaClient from "../../prisma";

interface VariacaoRequest {
    nameVariacao: string;
    descriptionVariacao1: string;
    descriptionVariacao2: string;
    descriptionVariacao3: string;
    descriptionVariacao4: string;
    descriptionVariacao5: string;
    descriptionVariacao6: string;
    preco: number;
    skuVariacao: string;
    estoqueVariacao: number;
    pesoKg: string;
    larguraCm: string;
    alturaCm: string;
    profundidadeCm: string;
    promocao: number;
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
        preco,
        skuVariacao,
        estoqueVariacao,
        pesoKg,
        larguraCm,
        alturaCm,
        profundidadeCm,
        promocao,
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
                preco: preco,
                skuVariacao: skuVariacao,
                estoqueVariacao: estoqueVariacao,
                pesoKg: pesoKg,
                larguraCm: larguraCm,
                alturaCm: alturaCm,
                profundidadeCm: profundidadeCm,
                promocao: promocao,
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
                preco: true,
                skuVariacao: true,
                estoqueVariacao: true,
                pesoKg: true,
                larguraCm: true,
                alturaCm: true,
                profundidadeCm: true,
                disponibilidadeVariacao: true,
                promocao: true,
                freteGratis: true,
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