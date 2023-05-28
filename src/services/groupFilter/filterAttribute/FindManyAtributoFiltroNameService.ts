import prismaClient from '../../../prisma';

interface FiltroAtributoRequest {
    groupFilter_id: string;
}

class FindManyAtributoFiltroNameService {
    async execute({ groupFilter_id }: FiltroAtributoRequest) {
        const filtroAtributos = await prismaClient.filterAtributo.findMany({
            where: {
                groupFilter_id: groupFilter_id
            },
            orderBy: {
                order: 'asc'
            },
            include: {
                atributo: true,
                groupFilter: true,
                imagefilteratributos: true
            }
        });

        return filtroAtributos;

    }
}

export { FindManyAtributoFiltroNameService }