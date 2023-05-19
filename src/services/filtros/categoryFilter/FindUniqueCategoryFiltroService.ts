import prismaClient from '../../../prisma';

interface FiltroAtributoRequest {
    filterCategory_id: string;
}

class FindUniqueCategoryFiltroService {
    async execute({ filterCategory_id }: FiltroAtributoRequest) {
        const filtrosCategory = await prismaClient.filterCategory.findUnique({
            where: {
                id: filterCategory_id
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

export { FindUniqueCategoryFiltroService }