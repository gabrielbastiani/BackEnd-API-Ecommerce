import prismaClient from "../../../../prisma";

interface LojaRequest {
    imageloja_id: any;
    order: number;
}

class UpdateOrderPhotoTextoService {
    async execute({ imageloja_id, order }: LojaRequest) {
        const loja = await prismaClient.imageLoja.update({
            where: {
                id: String(imageloja_id),
            },
            data: {
                order: Number(order),
            }
        })

        return loja;

    }
}

export { UpdateOrderPhotoTextoService }