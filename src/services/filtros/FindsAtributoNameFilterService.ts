import { StatusGroupFilter } from '@prisma/client';
import prismaClient from '../../prisma';

interface GroupRequest {
    atributoName: string;
}

class FindsAtributoNameFilterService {
    async execute({ atributoName }: GroupRequest) {

        const atributoNameFindUnique = await prismaClient.groupFilter.findUnique({
            where: {
                atributoName: atributoName,
            },
            include: {
                filteratributos: true,
                filtercategories: true
            }
        });

        const atributoNameFindFirst = await prismaClient.groupFilter.findFirst({
            where: {
                atributoName: atributoName,
                status: StatusGroupFilter.Ativo
            },
            include: {
                filteratributos: true,
                filtercategories: true
            }
        });

        const atributoNameFindMany = await prismaClient.groupFilter.findMany({
            where: {
                atributoName: atributoName,
                status: StatusGroupFilter.Ativo
            },
            include: {
                filteratributos: true,
                filtercategories: true
            }
        });

        const data = {
            atributoNameFindFirst,
            atributoNameFindUnique,
            atributoNameFindMany
        }

        return data;
    }
}

export { FindsAtributoNameFilterService }