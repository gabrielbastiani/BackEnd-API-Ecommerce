import prismaClient from "../../../prisma";

interface RelationRequest {
    atributo_id: string;
    product_id: string;
    variacao_id: string;
    order: number;
    store_id: string;
}

class CreateRelationAtributosServices {
    async execute({
        atributo_id,
        product_id,
        variacao_id,
        order,
        store_id
    }: RelationRequest) {

        const relation = await prismaClient.relationProductAtributo.create({
            data: {
                atributo_id: atributo_id,
                product_id: product_id,
                variacao_id: variacao_id,
                order: Number(order),
                store_id: store_id
            }
        });

        return relation;

    }
}

export { CreateRelationAtributosServices }