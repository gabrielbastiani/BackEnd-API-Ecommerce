import prismaClient from "../../../prisma";

interface LojaRequest {
    redesocial_id: any;
    imageRede: string;
}

class UpdateImageRedeSocialService {
    async execute({ redesocial_id, imageRede }: LojaRequest) {
        const loja = await prismaClient.redeSocial.update({
            where: {
                id: String(redesocial_id),
            },
            data: {
                imageRede: imageRede
            }
        })

        return loja;

    }
}

export { UpdateImageRedeSocialService }