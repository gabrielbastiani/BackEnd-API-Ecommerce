import { StatusGroupFilter } from '@prisma/client';
import prismaClient from '../../prisma';

interface GroupRequest {
    nameGroup: string;
}

class FindsNameGroupFilterService {
    async execute({ nameGroup }: GroupRequest) {

        const nameGroupFindUnique = await prismaClient.groupFilter.findUnique({
            where: {
                nameGroup: nameGroup,
            },
            include: {
                filteratributos: true,
                filtercategories: true
            }
        });
        
        const nameGroupFindFirst = await prismaClient.groupFilter.findFirst({
            where: {
                nameGroup: nameGroup,
                status: StatusGroupFilter.Ativo
            },
            include: {
                filteratributos: true,
                filtercategories: true
            }
        });

        const nameGroupFindMany = await prismaClient.groupFilter.findMany({
            where: {
                nameGroup: nameGroup,
                status: StatusGroupFilter.Ativo
            },
            include: {
                filteratributos: true,
                filtercategories: true
            }
        });

        const data = {
            nameGroupFindFirst,
            nameGroupFindUnique,
            nameGroupFindMany
        }

        return data;
    }
}

export { FindsNameGroupFilterService }