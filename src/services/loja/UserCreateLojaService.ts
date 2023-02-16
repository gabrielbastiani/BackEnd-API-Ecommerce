import prismaClient from '../../prisma';

class UserCreateLojaService {
    async execute() {
        const userLoja = await prismaClient.loja.findFirst({
            select: {
                id: true,
                logoLoja: true,
                nameLoja: true,
                cnpjLoja: true,
                emailLoja: true,
                phoneLoja: true,
                ruaLoja: true,
                numeroLoja: true,
                bairroLoja: true,
                complementoLoja: true,
                cepLoja: true,
                cityLoja: true,
                stateLoja: true,
                created_at: true,
                users: true,
                categories: true,
                products: true,
                variacoes: true,
                avaliacoes: true,
                pedidos: true,
                pagamentos: true,
                entregas: true,
            },
        });

        return userLoja;

    }
}

export { UserCreateLojaService }