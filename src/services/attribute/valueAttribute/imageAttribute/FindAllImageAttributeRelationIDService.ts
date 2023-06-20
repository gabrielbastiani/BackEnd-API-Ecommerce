import prismaClient from '../../../../prisma';

interface ImageAttributeRequest {
    valueAttribute_id: string;
}

class FindAllImageAttributeRelationIDService {
    async execute({ valueAttribute_id }: ImageAttributeRequest) {
        const exactImage = await prismaClient.imageAttribute.findMany({
            where: {
                valueAttribute_id: valueAttribute_id
            }
        });

        return exactImage;

    }
}

export { FindAllImageAttributeRelationIDService }