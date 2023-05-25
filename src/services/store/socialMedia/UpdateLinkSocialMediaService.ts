import prismaClient from "../../../prisma";

interface MediaRequest {
    socialMedia_id: string;
    link: string;
}

class UpdateLinkSocialMediaService {
    async execute({ socialMedia_id, link }: MediaRequest) {
        const media = await prismaClient.socialMedia.update({
            where: {
                id: socialMedia_id,
            },
            data: {
                link: link
            }
        })

        return media;

    }
}

export { UpdateLinkSocialMediaService }