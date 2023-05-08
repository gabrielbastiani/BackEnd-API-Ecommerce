import prismaClient from "../../prisma";

interface VariacaoRequest {
    nameVariacao: string;
    slug: string;
    order: number;
    posicao: string;
    slugPosicao: string;
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
    disponibilidadeVariacao: boolean;
    promocao: number;
    freteGratis: boolean;
    quantidade: number;
    product_id: string;
    loja_id: string;
}

class CreateVariacaoService {
    async execute({
        nameVariacao,
        order,
        posicao,
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
        quantidade,
        product_id,
        loja_id
    }: VariacaoRequest) {

        function removerAcentos(s: any) {
            return s.normalize('NFD')
                .replace(/[\u0300-\u036f]/g, "")
                .toLowerCase()
                .replace(/ +/g, "-")
                .replace(/-{2,}/g, "-")
                .replace(/[/]/g, "-");
        }

        const variacao = await prismaClient.variacao.create({
            data: {
                nameVariacao: nameVariacao,
                slug: removerAcentos(nameVariacao),
                order: order,
                posicao: posicao,
                slugPosicao: removerAcentos(posicao),
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
                quantidade: quantidade,
                product_id: product_id,
                loja_id: loja_id
            }
        });

        return variacao;

    }
}

export { CreateVariacaoService }