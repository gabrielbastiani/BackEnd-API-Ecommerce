import prismaClient from "../../../prisma";

interface LojaRequest {
    textoinstitucional_id: any;
    order: number;
}

class UpdateOrderTextoInstitucionalService {
    async execute({ textoinstitucional_id, order }: LojaRequest) {
        const loja = await prismaClient.textoInstitucional.update({
            where: {
                id: String(textoinstitucional_id),
            },
            data: {
                order: Number(order)
            }
        })

        return loja;

    }
}

export { UpdateOrderTextoInstitucionalService }