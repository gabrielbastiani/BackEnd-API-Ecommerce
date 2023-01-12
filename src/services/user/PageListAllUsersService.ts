import prismaClient from '../../prisma';

class PageListAllUsersService {
    async execute(page = 1, limit = 5) {

        const skip = limit * (page - 1);

        const allUsers = await prismaClient.user.findMany({
            orderBy: {
                created_at: 'desc'
            }
        });

        const users = await prismaClient.user.findMany({
            select: {
                id: true,
                nameComplete: true,
                email: true,
                cpfOrCnpj: true,
                inscricaoEstadual: true,
                phone: true,
                dataNascimento: true,
                genero: true,
                newslatter: true,
                rua: true,
                numero: true,
                bairro: true,
                complemento: true,
                cep: true,
                city: true,
                state: true,
                loja_id: true,
                authenticated: true,
                role: true,
                created_at: true,
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
            users,
            total: allUsers.length,
            total_pages: Math.ceil(allUsers.length / limit),
            current_page: page,
        }

        return data;

    }
}

export { PageListAllUsersService }