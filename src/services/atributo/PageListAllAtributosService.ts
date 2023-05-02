import prismaClient from '../../prisma';

class PageListAllAtributosService {
    async execute(page = 1, limit = 999999) {

        const skip = limit * (page - 1);

        const atributosAll = await prismaClient.atributo.findMany({
            orderBy: {
                created_at: 'desc'
            },
            include: {
                relationProductAtributos: true,
                imageatributos: true,
                groupFilterAtributos: true
            }
        });

        const atributos = await prismaClient.atributo.findMany({
            orderBy: {
                created_at: 'desc'
            },
            include: {
                relationProductAtributos: true,
                imageatributos: true,
                groupFilterAtributos: true
            },
            skip,
            take: limit
        });

        // Retornamos um objeto onde tem a lista e tambem qual numero total de paginas tem com base no limite que recebeu
        const data = {
            atributos,
            total: atributosAll.length,
            total_pages: Math.ceil(atributosAll.length / limit),
            current_page: page,
        }

        return data;

    }
}

export { PageListAllAtributosService }