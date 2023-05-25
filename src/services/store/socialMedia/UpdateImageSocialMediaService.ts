import prismaClient from "../../../prisma";

interface MediaRequest {
    socialMedia_id: string;
    image: string;
}

class UpdateImageSocialMediaService {
    async execute({ socialMedia_id, image }: MediaRequest) {
        const media = await prismaClient.socialMedia.update({
            where: {
                id: socialMedia_id,
            },
            data: {
                image: image
            }
        })

        return media;

    }
}

export { UpdateImageSocialMediaService }