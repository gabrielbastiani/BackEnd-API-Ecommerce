import prismaClient from '../../prisma';

class ListExactUserService {
    async execute({ user_id }) {
        const exactUser = await prismaClient.user.findUnique({
            where: {
                id: String(user_id)
            },
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
                local: true,
                numero: true,
                complemento: true,
                bairro: true,
                CEP: true,
                cidade: true,
                estado: true,
                loja_id: true,
                authenticated: true,
                role: true,
                created_at: true,
                pagamentos: true,
                pedidos: true
            }
        })
        return exactUser;
    }
}

export { ListExactUserService }