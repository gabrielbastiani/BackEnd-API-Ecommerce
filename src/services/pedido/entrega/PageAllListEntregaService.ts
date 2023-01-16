import prismaClient from '../../../prisma';

class PageAllListEntregaService {
    async execute(page = 1, limit = 5, pedido_id) {

        const skip = limit * (page - 1);

        const allEntregas = await prismaClient.entrega.findMany({
            where: {
                pedido_id: pedido_id
            },
            orderBy: {
                created_at: 'desc'
            }
        });

        const entregas = await prismaClient.entrega.findMany({
            select: {
                id: true,
                custo: true,
                codigoRastreamento: true,
                status: true,
                prazo: true,
                local: true,
                numero: true,
                complemento: true,
                bairro: true,
                CEP: true,
                cidade: true,
                estado: true,
                pedido_id: true,
                created_at: true,
                loja_id: true,
                pedidos: true
            },
            skip,
            take: limit,
            orderBy: {
                created_at: 'desc'
            }
        });

        // Retornamos um objeto onde tem a lista e tambem qual numero total de paginas tem com base no limite que recebeu
        const data = {
            entregas,
            total: allEntregas.length,
            total_pages: Math.ceil(allEntregas.length / limit),
            current_page: page,
        }

        return data;

    }
}

export { PageAllListEntregaService }