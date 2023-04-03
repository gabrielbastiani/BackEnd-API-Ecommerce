import prismaClient from "../../../prisma";

interface LojaRequest {
    textoinstitucional_id: any;
    description: string;
}

class UpdateDescriptionTextoService {
    async execute({ textoinstitucional_id, description }: LojaRequest) {
        const loja = await prismaClient.textoInstitucional.update({
            where: {
                id: String(textoinstitucional_id),
            },
            data: {
                description: description
            }
        })

        return loja;

    }
}

export { UpdateDescriptionTextoService }