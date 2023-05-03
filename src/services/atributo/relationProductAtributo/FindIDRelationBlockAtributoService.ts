import prismaClient from '../../../prisma';

interface FindsRequest {
    relationProductAtributo_id: string;
}

class FindIDRelationBlockAtributoService {
    async execute({ relationProductAtributo_id }: FindsRequest) {
        const findUniqueRelation = await prismaClient.relationProductAtributo.findUnique({
            where: {
                id: relationProductAtributo_id
            }
        });

        return findUniqueRelation;

    }
}

export { FindIDRelationBlockAtributoService }