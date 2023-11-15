import prismaClient from "../../../prisma";

interface SocialRequest {
    socialMedia_id: string;
}

class DeleteSocialMediaService {
    async execute({ socialMedia_id }: SocialRequest) {

        const store = await prismaClient.store.findFirst();

        const socialMedia = await prismaClient.socialMedia.findUnique({
            where: {
                id: socialMedia_id
            }
        });

        await prismaClient.notificationAdmin.create({
            data: {
                message: `Media social <strong>${socialMedia.name}</strong> foi deletada sucesso da loja.`,
                store_id: store.id
            }
        });

        const social = await prismaClient.socialMedia.delete({
            where: {
                id: socialMedia_id
            }
        })

        return social;

    }
}

export { DeleteSocialMediaService }