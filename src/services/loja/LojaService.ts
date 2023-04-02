import prismaClient from '../../prisma';

class LojaService {
    async execute() {
        const userLoja = await prismaClient.loja.findFirst({
            include: {
                redessociais: true,
                textosinstitucionais: true
            }
        });

        return userLoja;

    }
}

export { LojaService }