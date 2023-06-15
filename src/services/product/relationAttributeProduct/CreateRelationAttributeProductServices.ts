import prismaClient from "../../../prisma";

interface RelationAttributeProductRequest {
    product_id: string;
    type: string;
    value: string;
    slug: string;
    order: number;
    nivel: number;
    parentId: string;
    store_id: string;
}

class CreateRelationAttributeProductServices {
    async execute({
        product_id,
        type,
        value,
        order,
        nivel,
        parentId,
        store_id
    }: RelationAttributeProductRequest) {

        function removerAcentos(s: any) {
            return s.normalize('NFD')
                .replace(/[\u0300-\u036f]/g, "")
                .toLowerCase()
                .replace(/ +/g, "-")
                .replace(/-{2,}/g, "-")
                .replace(/[/]/g, "-");
        }

        const relation = await prismaClient.relationAttributeProduct.create({
            data: {
                product_id: product_id,
                type: type,
                value: value,
                slug: removerAcentos(value),
                order: Number(order),
                nivel: nivel,
                parentId: parentId,
                store_id: store_id
            }
        });

        return relation;

    }
}

export { CreateRelationAttributeProductServices }