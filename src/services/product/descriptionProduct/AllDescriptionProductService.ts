import prismaClient from '../../../prisma';

interface DescriptionRequest {
    product_id: string;
}

class AllDescriptionProductService {
    async execute({ product_id }: DescriptionRequest) {
        const allProducts = await prismaClient.descriptionProduct.findMany({
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

export { AllDescriptionProductService }