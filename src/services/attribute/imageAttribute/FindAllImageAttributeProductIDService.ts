import prismaClient from '../../../../prisma';

interface ImageAttributeRequest {
    product_id: string;
}

class FindAllImageAttributeProductIDService {
    async execute({ product_id }: ImageAttributeRequest) {
        const exactImage = await prismaClient.imageAttribute.findMany({
            where: {
                product_id: product_id
            }
        });

        return exactImage;

    }
}

export { FindAllImageAttributeProductIDService }