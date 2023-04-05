import prismaClient from '../../../prisma';

class ListAllRedeSocialService {
    async execute() {
        const listRedes = await prismaClient.redeSocial.findMany()
        return listRedes;
    }
}

export { ListAllRedeSocialService }