import { StatusGroupFilter } from '@prisma/client';
import prismaClient from '../../prisma';

interface GroupRequest {
    atributoName: string;
}

class FindsAtributoNameFilterService {
    async execute({ atributoName }: GroupRequest) {

        const atributoNameFindFirst = await prismaClient.groupFilter.findFirst({
            where: {
                atributoName: atributoName,
                status: StatusGroupFilter.Disponivel
            },
            include: {
                filteratributos: true,
                filtercategories: true
            }
        });

        const atributoNameFindMany = await prismaClient.groupFilter.findMany({
            where: {
                atributoName: atributoName,
                status: StatusGroupFilter.Disponivel
            },
            include: {
                filteratributos: true,
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

export { FindsAtributoNameFilterService }