import prismaClient from "../../../prisma";

interface RelationRequest {
    tipo: string;
    product_id: string;
    variacao_id: string;
    order: number;
    loja_id: string;
}

class CreateRelationAtributosServices {
    async execute({
        tipo,
        product_id,
        variacao_id,
        order,
        loja_id
    }: RelationRequest) {

        const relation = await prismaClient.relationProductAtributo.create({
            data: {
                tipo: tipo,
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