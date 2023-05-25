import prismaClient from '../../../prisma';

class ListAllSocialMediaService {
    async execute() {
        const listMedia = await prismaClient.socialMedia.findMany({
            orderBy: {
                order: 'asc'
            },
            include: {
                store: true
            }
        })
        return listMedia;
    }
}

export { ListAllSocialMediaService }