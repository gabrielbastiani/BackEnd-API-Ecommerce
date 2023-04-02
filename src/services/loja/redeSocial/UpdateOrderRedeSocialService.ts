import prismaClient from "../../../prisma";

interface LojaRequest {
    redesocial_id: any;
    order: number;
}

class UpdateOrderRedeSocialService {
    async execute({ redesocial_id, order }: LojaRequest) {
        const loja = await prismaClient.redeSocial.update({
            where: {
                id: String(redesocial_id)
            },
            data: {
                order: Number(order)
            }
        })

        return loja;

    }
}

export { UpdateOrderRedeSocialService }