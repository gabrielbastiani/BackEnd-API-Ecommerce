import prismaClient from "../../../prisma";

interface LojaRequest {
    redesocial_id: any;
    order: number;
}

class UpdateOrderRedeSocialService {
    async execute({ redesocial_id, order }: LojaRequest) {
        const store = await prismaClient.socialMedia.update({
            where: {
                id: String(redesocial_id),
            },
            data: {
                order: Number(order)
            }
        })

        return store;

    }
}

export { UpdateOrderRedeSocialService }