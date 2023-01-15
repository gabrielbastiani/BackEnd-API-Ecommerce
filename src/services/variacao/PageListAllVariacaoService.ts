import prismaClient from '../../prisma';

class PageListAllVariacaoService {
    async execute(page = 1, limit = 5) {

        const skip = limit * (page - 1);

        const allVariacao = await prismaClient.variacao.findMany({
            orderBy: {
                created_at: 'desc'
            }
        });

        const variacoesDate = await prismaClient.variacao.findMany({
            select: {
                id: true,
                nameVariacao: true,
                descriptionVariacao1: true,
                descriptionVariacao2: true,
                descriptionVariacao3: true,
                descriptionVariacao4: true,
                descriptionVariacao5: true,
                descriptionVariacao6: true,
                preco: true,
                skuVariacao: true,
                estoqueVariacao: true,
                pesoKg: true,
                larguraCm: true,
                alturaCm: true,
                profundidadeCm: true,
                disponibilidadeVariacao: true,
                promocao: true,
                freteGratis: true,
                created_at: true,
                product_id: true,
                loja_id: true,
                photovariacoes: true,
            },
            skip,
            take: limit,
            orderBy: {
                created_at: 'desc'
            }
        });

        // Retornamos um objeto onde tem a lista e tambem qual numero total de paginas tem com base no limite que recebeu
        const data = {
            variacoesDate,
            total: allVariacao.length,
            total_pages: Math.ceil(allVariacao.length / limit),
            current_page: page,
        }

        return data;

    }
}

export { PageListAllVariacaoService }