import prismaClient from '../../../../prisma';

interface ImageRequest {
    imageMenuCategory_id: string;
}

class FindUniqueImageMenuCategoryService {
    async execute({ imageMenuCategory_id }: ImageRequest) {
        const image = await prismaClient.imageMenuCategory.findUnique({
            where: {
                id: imageMenuCategory_id
            }
        });

        return image;
        
    }
}

export { FindUniqueImageMenuCategoryService }