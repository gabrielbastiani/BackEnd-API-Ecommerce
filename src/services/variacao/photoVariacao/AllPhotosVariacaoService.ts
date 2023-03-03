import prismaClient from '../../../prisma';

interface PhotsRequest {
    photoVariacao_id: string;
}

class AllPhotosVariacaoService {
    async execute({ photoVariacao_id }: PhotsRequest) {
        const allPhotos = await prismaClient.photoVariacao.findMany({
            where: {
                id: photoVariacao_id
            },
            select: {
                id: true,
                variacao: true
            }
        });

        return allPhotos;

    }
}

export { AllPhotosVariacaoService }