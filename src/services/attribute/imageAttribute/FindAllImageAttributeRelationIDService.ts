import prismaClient from '../../../../prisma';

interface ImageAttributeRequest {
    relationAttributeProduct_id: string;
}

class FindAllImageAttributeRelationIDService {
    async execute({ relationAttributeProduct_id }: ImageAttributeRequest) {
        const exactImage = await prismaClient.imageAttribute.findMany({
            where: {
                relationAttributeProduct_id: relationAttributeProduct_id
            }
        });

        return exactImage;

    }
}

export { FindAllImageAttributeRelationIDService }