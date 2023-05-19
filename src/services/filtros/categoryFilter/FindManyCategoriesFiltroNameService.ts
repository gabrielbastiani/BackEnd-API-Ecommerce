import prismaClient from '../../../prisma';

interface FiltroCategory {
    groupFilter_id: string;
}

class FindManyCategoriesFiltroNameService {
    async execute({ groupFilter_id }: FiltroCategory) {
        const filtrosCategory = await prismaClient.filterCategory.findMany({
            where: {
                groupFilter_id: groupFilter_id
            },
            orderBy: {
                order: 'asc'
            },
            include: {
                category: true,
                groupFilter: true,
                imageFilterCategory: true
            }
        });

        return filtrosCategory;

    }
}

export { FindManyCategoriesFiltroNameService }