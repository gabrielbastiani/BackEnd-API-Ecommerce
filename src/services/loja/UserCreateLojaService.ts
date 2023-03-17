import prismaClient from '../../prisma';

class UserCreateLojaService {
    async execute() {
        const userLoja = await prismaClient.loja.findFirst({
            include: {
                users: true,
                categories: true,
                products: true,
                variacoes: true,
                avaliacoes: true,
                carrinhos: true,
                pagamentos: true,
                entregas: true,
                pedidos: true,
            }
        });

        return userLoja;

    }
}

export { UserCreateLojaService }