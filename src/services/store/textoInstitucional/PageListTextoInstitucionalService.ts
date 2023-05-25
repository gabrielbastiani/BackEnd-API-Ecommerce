import prismaClient from '../../../prisma';

class PageListTextoInstitucionalService {
    async execute(page = 1, limit = 5) {

        const skip = limit * (page - 1);

        const allTextos = await prismaClient.textoInstitucional.findMany({
            orderBy: {
                order: 'asc'
            }
        });

        const textos = await prismaClient.textoInstitucional.findMany({
            skip,
            take: limit,
            orderBy: {
                order: 'asc'
            }
        });

        // Retornamos um objeto onde tem a lista e tambem qual numero total de paginas tem com base no limite que recebeu
        const data = {
            textos,
            total: allTextos.length,
            total_pages: Math.ceil(allTextos.length / limit),
            current_page: page,
        }

        return data;

    }
}

export { PageListTextoInstitucionalService }