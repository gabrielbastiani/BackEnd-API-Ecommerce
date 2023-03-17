import prismaClient from '../../prisma';

class LojaService {
    async execute() {
        const userLoja = await prismaClient.loja.findFirst();

        return userLoja;

    }
}

export { LojaService }