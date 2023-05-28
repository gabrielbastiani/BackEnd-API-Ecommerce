import { StatusGroupFilter } from '@prisma/client';
import prismaClient from '../../prisma';

interface GroupRequest {
    nameGroup: string;
}

class FindsNameGroupFilterService {
    async execute({ nameGroup }: GroupRequest) {

        const nameGroupFindFirst = await prismaClient.groupFilter.findFirst({
            where: {
                nameGroup: nameGroup,
                status: StatusGroupFilter.Disponivel
            },
            include: {
                filterattributes: true,
                filtercategories: true
            }
        });

        const nameGroupFindMany = await prismaClient.groupFilter.findMany({
            where: {
                nameGroup: nameGroup,
                status: StatusGroupFilter.Disponivel
            },
            include: {
                filterattributes: true,
                filtercategories: true
            }
        });

        const data = {
            nameGroupFindFirst,
            nameGroupFindMany
        }

        return data;
    }
}

export { FindsNameGroupFilterService }