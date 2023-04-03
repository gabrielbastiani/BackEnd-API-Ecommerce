import prismaClient from "../../../../prisma";

interface LojaRequest {
    imageloja_id: any;
    titleImage: string;
}

class UpdateTitlePhotoTextoService {
    async execute({ imageloja_id, titleImage }: LojaRequest) {
        const loja = await prismaClient.imageLoja.update({
            where: {
                id: String(imageloja_id),
            },
            data: {
                titleImage: titleImage,
            }
        })

        return loja;

    }
}

export { UpdateTitlePhotoTextoService }