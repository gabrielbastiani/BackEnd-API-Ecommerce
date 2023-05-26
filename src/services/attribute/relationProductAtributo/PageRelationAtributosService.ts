import prismaClient from '../../../prisma';

class PageRelationAtributosService {
    async execute(page = 1, limit = 10, atributo_id: string) {

        const skip = limit * (page - 1);

        const allFindAsc = await prismaClient.relationProductAtributo.findMany({
            where: {
                atributo_id: atributo_id
            },
            orderBy: {
                order: 'asc'
            },
            include: {
                atributo: true,
                product: true,
                variacao: true
            }
        });

        const allFindAscAtributos = await prismaClient.relationProductAtributo.findMany({
            where: {
                atributo_id: atributo_id
            },
            orderBy: {
                order: 'asc'
            },
            include: {
                atributo: true,
                product: true,
                variacao: true
            },
            skip,
            take: limit
        });

        const data = {
            allFindAscAtributos,
            total: allFindAsc.length,
            total_pages: Math.ceil(allFindAsc.length / limit),
            current_page: page,
        }

        return data;

    }
}

export { PageRelationAtributosService }