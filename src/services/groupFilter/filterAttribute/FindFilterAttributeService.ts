import { StatusFilterAttribute } from '@prisma/client';
import prismaClient from '../../../prisma';

interface FilterAttributeRequest {
    groupFilter_id: any;
}

class FindFilterAttributeService {
    async execute({ groupFilter_id }: FilterAttributeRequest) {
        const filtroAtributos = await prismaClient.filterAttribute.findMany({
            where: {
                groupFilter_id: groupFilter_id,
                status: StatusFilterAttribute.Disponivel
            },
            orderBy: {
                order: 'asc'
            },
            include: {
                groupFilter: true,
                imagefilteratributos: true
            }
        });

        return filtroAtributos;

    }
}

export { FindFilterAttributeService }