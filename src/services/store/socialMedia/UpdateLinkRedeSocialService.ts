import prismaClient from "../../../prisma";

interface LojaRequest {
    redesocial_id: any;
    link: string;
}

class UpdateLinkRedeSocialService {
    async execute({ redesocial_id, link }: LojaRequest) {
        const store = await prismaClient.socialMedia.update({
            where: {
                id: String(redesocial_id),
            },
            data: {
                link: link
            }
        })

        return store;

    }
}

export { UpdateLinkRedeSocialService }