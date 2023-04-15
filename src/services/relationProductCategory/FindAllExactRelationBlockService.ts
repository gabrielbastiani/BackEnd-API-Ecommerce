import prismaClient from '../../prisma';

interface FindsRequest {
    relationProductCategory_id: string;
}

class FindAllExactRelationBlockService {
    async execute({ relationProductCategory_id }: FindsRequest) {
        const findUniqueRelation = await prismaClient.relationProductCategory.findMany({
            where: {
                id: relationProductCategory_id,
            }
        });

        return findUniqueRelation;

    }
}

export { FindAllExactRelationBlockService }