import prismaClient from '../../../../prisma';

interface ImageAttributeRequest {
    imageAttribute_id: string;
}

class FindUniqueImageAttributeService {
    async execute({ imageAttribute_id }: ImageAttributeRequest) {
        const exactImage = await prismaClient.imageAttribute.findUnique({
            where: {
                id: imageAttribute_id
            }
        });

        return exactImage;

    }
}

export { FindUniqueImageAttributeService }