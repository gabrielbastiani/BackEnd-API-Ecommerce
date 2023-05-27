import prismaClient from '../../../prisma';

interface PhotsRequest {
    variacao_id: string;
}

class AllPhotosService {
    async execute({ variacao_id }: PhotsRequest) {
        const allVariacoes = await prismaClient.photoVariacao.findMany({
            where: {
                variacao_id: variacao_id
            }
        });

        return allVariacoes;

    }
}

export { AllPhotosService }