import prismaClient from '../../../prisma';

interface TagRequest {
    product_id: string;
}

class AllTagProductService {
    async execute({ product_id }: TagRequest) {
        const allProducts = await prismaClient.tag.findMany({
            where: {
                product_id: product_id
            },
            orderBy: {
                created_at: 'desc'
            },
            include: {
                product: {include: {tags: true}}
            }
        });

        return allProducts;

    }
}

export { AllTagProductService }