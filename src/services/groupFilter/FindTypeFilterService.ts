import { StatusGroupFilter } from '@prisma/client';
import prismaClient from '../../prisma';

interface GroupRequest {
    type: string;
}

class FindTypeFilterService {
    async execute({ type }: GroupRequest) {

        const atributoNameFindFirst = await prismaClient.groupFilter.findFirst({
            where: {
                type: type,
                status: StatusGroupFilter.Disponivel
            },
            include: {
                filterattributes: true,
                filtercategories: true
            }
        });

        const atributoNameFindMany = await prismaClient.groupFilter.findMany({
            where: {
                type: type,
                status: StatusGroupFilter.Disponivel
            },
            include: {
                filterattributes: true,
                filtercategories: true
            }
        });

        const data = {
            atributoNameFindFirst,
            atributoNameFindMany
        }

        return data;
    }
}

export { FindTypeFilterService }