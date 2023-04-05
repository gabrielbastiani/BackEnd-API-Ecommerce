import prismaClient from '../../../prisma';

class ListAllRedeSocialService {
    async execute() {
        const listRedes = await prismaClient.redeSocial.findMany({
            orderBy: {
                order: 'asc'
            }
        })
        return listRedes;
    }
}

export { ListAllRedeSocialService }