import prismaClient from '../../../../prisma';

interface PhotsRequest {
    textoinstitucional_id: string;
}

class AllPhotosTextosService {
    async execute({ textoinstitucional_id }: PhotsRequest) {
        const allImages = await prismaClient.imageLoja.findMany({
            where: {
                textoinstitucional_id: textoinstitucional_id
            },
            orderBy: {
                order: 'asc'
            }
        });

        return allImages;

    }
}

export { AllPhotosTextosService }