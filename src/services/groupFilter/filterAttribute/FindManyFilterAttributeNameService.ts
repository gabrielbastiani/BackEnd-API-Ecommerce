import prismaClient from '../../../prisma';

interface FilterAttributeRequest {
    groupFilter_id: string;
}

class FindManyFilterAttributeNameService {
    async execute({ groupFilter_id }: FilterAttributeRequest) {
        const filtroAtributos = await prismaClient.filterAttribute.findMany({
            where: {
                groupFilter_id: groupFilter_id
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

export { FindManyFilterAttributeNameService }