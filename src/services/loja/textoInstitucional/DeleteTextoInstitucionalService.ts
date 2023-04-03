import prismaClient from "../../../prisma";

interface LojaRequest {
    textoinstitucional_id: any;
}

class DeleteTextoInstitucionalService {
    async execute({ textoinstitucional_id }: LojaRequest) {
        const loja = await prismaClient.textoInstitucional.delete({
            where: {
                id: String(textoinstitucional_id),
            }
        })

        return loja;

    }
}

export { DeleteTextoInstitucionalService }