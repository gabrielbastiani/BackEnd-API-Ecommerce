import prismaClient from '../../../prisma';

interface PhotsRequest {
    product_id: string;
}

class AllPhotosProductFindService {
    async execute({ product_id }: PhotsRequest) {
        const allVariacoes = await prismaClient.photoVariacao.findMany({
            where: {
                product_id: product_id
            },
            select: {
                photoVariacao: true
            }
        });

        return allVariacoes;

    }
}

export { AllPhotosProductFindService }