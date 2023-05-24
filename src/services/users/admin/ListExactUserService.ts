import prismaClient from '../../prisma';

class ListExactUserService {
    async execute({ user_id }) {
        const exactUser = await prismaClient.user.findUnique({
            where: {
                id: String(user_id)
            },
            include: {
                pagamentos: true,
                pedidos: true
            }
        })
        return exactUser;
    }
}

export { ListExactUserService }