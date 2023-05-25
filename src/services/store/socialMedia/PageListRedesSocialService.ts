import prismaClient from '../../../prisma';

class PageListRedesSocialService {
    async execute(page = 1, limit = 5) {

        const skip = limit * (page - 1);

        const allRedesSociais = await prismaClient.socialMedia.findMany({
            orderBy: {
                order: 'asc'
            }
        });

        const redes = await prismaClient.socialMedia.findMany({
            skip,
            take: limit,
            orderBy: {
                order: 'asc'
            }
        });

        // Retornamos um objeto onde tem a lista e tambem qual numero total de paginas tem com base no limite que recebeu
        const data = {
            redes,
            total: allRedesSociais.length,
            total_pages: Math.ceil(allRedesSociais.length / limit),
            current_page: page,
        }

        return data;

    }
}

export { PageListRedesSocialService }