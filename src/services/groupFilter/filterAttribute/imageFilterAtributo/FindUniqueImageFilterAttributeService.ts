import prismaClient from '../../../../prisma';

interface FilterAttributeRequest {
    imageFilterAttribute_id: string;
}

class FindUniqueImageFilterAttributeService {
    async execute({ imageFilterAttribute_id }: FilterAttributeRequest) {
        const exactImage = await prismaClient.imageFilterAttribute.findUnique({
            where: {
                id: imageFilterAttribute_id
            }
        });

        return exactImage;

    }
}

export { FindUniqueImageFilterAttributeService }