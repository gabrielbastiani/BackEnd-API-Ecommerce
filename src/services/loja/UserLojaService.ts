import prismaClient from '../../prisma';

class UserLojaService {
    async execute({ store_id }) {
        const userLoja = await prismaClient.loja.findUnique({
            where: {
                id: String(store_id),
            },
            include: {
                users: true,
                redessociais: true,
                textosinstitucionais: true,
                products: true,
                variacoes: true,
                avaliacoes: true,
                newsletters: true,
                contatos: true,
            }
        });

        return userLoja;

    }
}

export { UserLojaService }