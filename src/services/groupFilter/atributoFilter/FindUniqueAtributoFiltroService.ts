import prismaClient from '../../../prisma';

interface FiltroAtributoRequest {
    filterAtributo_id: string;
}

class FindUniqueAtributoFiltroService {
    async execute({ filterAtributo_id }: FiltroAtributoRequest) {
        const filtroAtributos = await prismaClient.filterAtributo.findUnique({
            where: {
                id: filterAtributo_id
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

export { FindUniqueAtributoFiltroService }