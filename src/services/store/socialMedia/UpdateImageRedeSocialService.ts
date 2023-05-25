import prismaClient from "../../../prisma";

interface LojaRequest {
    redesocial_id: any;
    imageRede: string;
}

class UpdateImageRedeSocialService {
    async execute({ redesocial_id, imageRede }: LojaRequest) {
        const store = await prismaClient.socialMedia.update({
            where: {
                id: String(redesocial_id),
            },
            data: {
                imageRede: imageRede
            }
        })

        return store;

    }
}

export { UpdateImageRedeSocialService }