import prismaClient from "../../../prisma";

interface LojaRequest {
    redesocial_id: any;
}

class DeleteRedeSocialService {
    async execute({ redesocial_id }: LojaRequest) {
        const store = await prismaClient.socialMedia.delete({
            where: {
                id: String(redesocial_id),
            }
        })

        return store;

    }
}

export { DeleteRedeSocialService }