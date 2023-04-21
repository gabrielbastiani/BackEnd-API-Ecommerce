import prismaClient from '../../prisma';

class PageListAllContatoService {
    async execute(page = 1, limit = 99999) {

        const skip = limit * (page - 1);

        const contatoAll = await prismaClient.contato.findMany({
            orderBy: {
                created_at: 'desc'
            },
            include: {
                loja: true,
            }
        });

        const contatos = await prismaClient.contato.findMany({
            include: {
                loja: true,
            },
            skip,
            take: limit,
            orderBy: {
                created_at: 'desc'
            }
        });

        // Retornamos um objeto onde tem a lista e tambem qual numero total de paginas tem com base no limite que recebeu
        const data = {
            contatos,
            total: contatoAll.length,
            total_pages: Math.ceil(contatoAll.length / limit),
            current_page: page,
        }

        return data;

    }
}

export { PageListAllContatoService }