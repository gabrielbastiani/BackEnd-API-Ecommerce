import prismaClient from '../../../prisma';

interface ImageRequest {
    photoProduct_id: string;
}

class AllPhotosService {
    async execute({ photoProduct_id }: ImageRequest) {
        const allPhotos = await prismaClient.photoProduct.findMany({
            where: {
                id: photoProduct_id
            },
            select: {
                id: true,
                image: true
            },
            orderBy: {
                order: 'asc'
            }
        });

        return allPhotos;

    }
}

export { AllPhotosService }