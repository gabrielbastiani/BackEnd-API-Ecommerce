import prismaClient from '../../../prisma';

class ListExactRedeSocialService {
    async execute({ redesocial_id }) {
        const exactRedes = await prismaClient.redeSocial.findUnique({
            where: {
                id: String(redesocial_id)
            }
        })
        return exactRedes;
    }
}

export { ListExactRedeSocialService }