import prismaClient from '../../../prisma';

interface FilterAttributeRequest {
    filterAttribute_id: string;
}

class FindUniqueFilterAttributeService {
    async execute({ filterAttribute_id }: FilterAttributeRequest) {
        const filtroAtributos = await prismaClient.filterAttribute.findUnique({
            where: {
                id: filterAttribute_id
            },
            include: {
                groupFilter: true,
                imagefilteratributos: true
            }
        });

        return filtroAtributos;

    }
}

export { FindUniqueFilterAttributeService }