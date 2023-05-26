import prismaClient from '../../../prisma';

class FindCategorysRelationService {
    async execute() {
        const findCategoies = await prismaClient.productCategory.findMany({
            where: {
                nivel: 0
            },
            orderBy: {
                order: 'asc'
            },
            include: {
                product: true,
                category: true
            }
        });

        return findCategoies;

    }
}

export { FindCategorysRelationService }