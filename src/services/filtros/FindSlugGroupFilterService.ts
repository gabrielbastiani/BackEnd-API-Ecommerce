import { StatusGroupFilter } from '@prisma/client';
import prismaClient from '../../prisma';

interface GroupRequest {
    slugCategoryOrItem: string;
}

class FindSlugGroupFilterService {
    async execute({ slugCategoryOrItem }: GroupRequest) {
        const atributoFindMany = await prismaClient.groupFilter.findMany({
            where: {
                slugCategoryOrItem: slugCategoryOrItem,
                status: StatusGroupFilter.Ativo
            },
            include: {
                filteratributos: {orderBy: {order: 'asc'}},
                filtercategories: true
            }
        });

        return atributoFindMany;
    }
}

export { FindSlugGroupFilterService }