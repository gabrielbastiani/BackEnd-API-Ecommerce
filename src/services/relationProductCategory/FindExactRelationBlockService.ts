import prismaClient from '../../prisma';

interface FindsRequest {
    relationProductCategory_id: string;
}

class FindExactRelationBlockService {
    async execute({ relationProductCategory_id }: FindsRequest) {
        const findUniqueRelation = await prismaClient.relationProductCategory.findUnique({
            where: {
                id: String(relationProductCategory_id)
            }
        });

        return findUniqueRelation;

    }
}

export { FindExactRelationBlockService }