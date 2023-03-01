import prismaClient from '../../../prisma';

interface PhotsRequest {
    photoProduct_id: string;
}

class AllPhotosService {
    async execute({ photoProduct_id }: PhotsRequest) {
        const allPhotos = await prismaClient.photoProduct.findMany({
            where: {
                id: photoProduct_id
            },
            select: {
                id: true,
                photo: true
            }
        });

        return allPhotos;

    }
}

export { AllPhotosService }