import prismaClient from "../../../prisma";

interface LojaRequest {
    redesocial_id: any;
}

class DeleteRedeSocialService {
    async execute({ redesocial_id }: LojaRequest) {
        const loja = await prismaClient.redeSocial.delete({
            where: {
                id: String(redesocial_id),
            }
        })

        return loja;

    }
}

export { DeleteRedeSocialService }