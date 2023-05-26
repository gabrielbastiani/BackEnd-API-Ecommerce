import prismaClient from '../../../prisma';

interface ImageRequest {
    product_id: string;
}

class AllPhotosProductService {
    async execute({ product_id }: ImageRequest) {
        const allProducts = await prismaClient.photoProduct.findMany({
            where: {
                product_id: product_id
            },
            orderBy: {
                order: 'asc'
            }
        });

        return allProducts;

    }
}

export { AllPhotosProductService }