import prismaClient from '../../../../prisma';

interface ImageRequest {
    imageFilterCategory_id: string;
}

class FindUniqueImageFilterCategoryService {
    async execute({ imageFilterCategory_id }: ImageRequest) {
        const exactImage = await prismaClient.imageFilterCategory.findUnique({
            where: {
                id: imageFilterCategory_id
            }
        });

        return exactImage;

    }
}

export { FindUniqueImageFilterCategoryService }