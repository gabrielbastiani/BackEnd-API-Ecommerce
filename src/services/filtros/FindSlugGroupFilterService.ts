import { StatusGroupFilter } from '@prisma/client';
import prismaClient from '../../prisma';

interface GroupRequest {
    slugCategory: string;
}

class FindSlugGroupFilterService {
    async execute({ slugCategory }: GroupRequest) {
        const atributoFindMany = await prismaClient.groupFilter.findMany({
            where: {
                slugCategory: slugCategory,
                status: StatusGroupFilter.Disponivel
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