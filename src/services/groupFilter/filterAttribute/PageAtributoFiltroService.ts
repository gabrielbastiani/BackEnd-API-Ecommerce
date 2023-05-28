import prismaClient from '../../../prisma';

class PageAtributoFiltroService {
    async execute(page = 1, limit = 999999) {

        const skip = limit * (page - 1);

        const filtroAll = await prismaClient.filterAtributo.findMany({
            orderBy: {
                created_at: 'desc'
            },
            include: {
                atributo: true,
                groupFilter: true,
                imagefilteratributos: true
            }
        });

        const filtroAtributos = await prismaClient.filterAtributo.findMany({
            orderBy: {
                created_at: 'desc'
            },
            include: {
                atributo: true,
                groupFilter: true,
                imagefilteratributos: true
            },
            skip,
            take: limit
        });

        const data = {
            filtroAtributos,
            total: filtroAll.length,
            total_pages: Math.ceil(filtroAll.length / limit),
            current_page: page,
        }

        return data;

    }
}

export { PageAtributoFiltroService }