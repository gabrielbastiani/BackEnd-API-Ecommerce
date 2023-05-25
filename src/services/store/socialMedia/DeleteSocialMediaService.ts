import prismaClient from "../../../prisma";

interface SocialRequest {
    socialMedia_id: string;
}

class DeleteSocialMediaService {
    async execute({ socialMedia_id }: SocialRequest) {
        const social = await prismaClient.socialMedia.delete({
            where: {
                id: socialMedia_id
            }
        })

        return social;

    }
}

export { DeleteSocialMediaService }