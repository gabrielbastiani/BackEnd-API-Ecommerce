import prismaClient from "../../../prisma";

interface MediaRequest {
    socialMedia_id: string;
    order: number;
}

class UpdateOrderSocialMediaService {
    async execute({ socialMedia_id, order }: MediaRequest) {
        const media = await prismaClient.socialMedia.update({
            where: {
                id: socialMedia_id,
            },
            data: {
                order: Number(order)
            }
        })

        return media;

    }
}

export { UpdateOrderSocialMediaService }