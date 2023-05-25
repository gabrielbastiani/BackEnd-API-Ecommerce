import prismaClient from '../../../prisma';

class ListAllRedeSocialService {
    async execute() {
        const listRedes = await prismaClient.socialMedia.findMany({
            orderBy: {
                order: 'asc'
            }
        })
        return listRedes;
    }
}

export { ListAllRedeSocialService }