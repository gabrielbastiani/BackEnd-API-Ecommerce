import prismaClient from "../../../prisma";

interface RelationRequest {
    atributo_id: string;
    product_id: string;
    variacao_id: string;
    order: number;
    loja_id: string;
}

class CreateRelationAtributosServices {
    async execute({
        atributo_id,
        product_id,
        variacao_id,
        order,
        loja_id
    }: RelationRequest) {

        function removerAcentos(s: any) {
            return s.normalize('NFD')
                .replace(/[\u0300-\u036f]/g, "")
                .toLowerCase()
                .replace(/ +/g, "-")
                .replace(/-{2,}/g, "-")
                .replace(/[/]/g, "-");
        }

        const relation = await prismaClient.relationProductAtributo.create({
            data: {
                atributo_id: atributo_id,
                product_id: product_id,
                variacao_id: variacao_id,
                order: Number(order),
                loja_id: loja_id
            }
        });

        return relation;

    }
}

export { CreateRelationAtributosServices }