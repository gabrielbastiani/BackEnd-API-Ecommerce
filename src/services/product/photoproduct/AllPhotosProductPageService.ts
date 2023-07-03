import prismaClient from '../../../prisma';

interface ImageRequest {
    product_id: string;
}

class AllPhotosProductPageService {
    async execute({ product_id }: ImageRequest) {
        const allPhotosProducts = await prismaClient.photoProduct.findMany({
            where: {
                product_id: product_id
            },
            orderBy: {
                order: 'asc'
            },
            include: {
                product: true
            }
        });

        return allPhotosProducts;

    }
}

export { AllPhotosProductPageService }