import prismaClient from '../../../prisma';

interface RequestTexto {
    textoinstitucional_id: string;
}

class ListExactTextInstitucionalService {
    async execute({ textoinstitucional_id }: RequestTexto) {
        const exactTextos = await prismaClient.textoInstitucional.findUnique({
            where: {
                id: textoinstitucional_id
            }
        })
        return exactTextos;
    }
}

export { ListExactTextInstitucionalService }