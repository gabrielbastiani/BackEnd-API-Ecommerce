import prismaClient from '../../../prisma';

interface PhotsRequest {
    variacao_id: string;
}

class AllPhotosVariacoesService {
    async execute({ variacao_id }: PhotsRequest) {
        const allVariacoes = await prismaClient.photoVariacao.findMany({
            where: {
                variacao_id: variacao_id
            },
            select: {
                id: true,
                photoVariacao: true
            },
            orderBy: {
                created_at: 'desc'
            }
        });

        return allVariacoes;

    }
}

export { AllPhotosVariacoesService }