import prismaClient from "../../prisma";

interface RelationRequest {
    product_id: string;
}

class DeleteRelationProductIDService {
    async execute({ product_id }: RelationRequest) {
        const relation = await prismaClient.relationProductCategory.deleteMany({
            where: {
                product_id: product_id
            }
        });

        return relation;

    }
}

export { DeleteRelationProductIDService }