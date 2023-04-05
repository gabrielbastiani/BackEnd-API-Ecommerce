import prismaClient from '../../prisma';

class UserLojaService {
    async execute({ loja_id }) {
        const userLoja = await prismaClient.loja.findUnique({
            where: {
                id: String(loja_id),
            },
            include: {
                users: true,
                redessociais: true,
                textosinstitucionais: true,
                categories: true,
                subcategories: true,
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