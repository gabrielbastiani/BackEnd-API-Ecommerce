import prismaClient from '../../../prisma';

interface PhotsRequest {
    product_id: string;
}

class AllPhotosProductService {
    async execute({ product_id }: PhotsRequest) {
        const allProducts = await prismaClient.photoProduct.findMany({
            where: {
                product_id: product_id
            },
            select: {
                id: true,
                photo: true
            },
            orderBy: {
                created_at: 'desc'
            }
        });

        return allProducts;

    }
}

export { AllPhotosProductService }