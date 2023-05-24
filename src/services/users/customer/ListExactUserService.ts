import prismaClient from '../../prisma';

class ListExactUserService {
    async execute({ admin_id }) {
        const exactUser = await prismaClient.user.findUnique({
            where: {
                id: String(admin_id)
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