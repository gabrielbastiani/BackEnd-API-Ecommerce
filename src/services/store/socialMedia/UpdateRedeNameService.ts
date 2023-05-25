import prismaClient from "../../../prisma";

interface LojaRequest {
    redesocial_id: any;
    redeName: string;
}

class UpdateRedeNameService {
    async execute({ redesocial_id, redeName }: LojaRequest) {
        const store = await prismaClient.socialMedia.update({
            where: {
                id: String(redesocial_id),
            },
            data: {
                redeName: redeName
            }
        })

        return store;

    }
}

export { UpdateRedeNameService }