import prismaClient from "../../../prisma";

interface LojaRequest {
    redesocial_id: any;
    redeName: string;
}

class UpdateRedeNameService {
    async execute({ redesocial_id, redeName }: LojaRequest) {
        const loja = await prismaClient.redeSocial.update({
            where: {
                id: String(redesocial_id),
            },
            data: {
                redeName: redeName
            }
        })

        return loja;

    }
}

export { UpdateRedeNameService }