import prismaClient from '../../../../prisma';

interface ImageRequest {
    imageMenuCategory_id: string;
}

class DeletetImageMenuCategoryService {
    async execute({ imageMenuCategory_id }: ImageRequest) {
        const deleteImage = await prismaClient.imageMenuCategory.delete({
            where: {
                id: imageMenuCategory_id
            }
        });

        return deleteImage;

    }
}

export { DeletetImageMenuCategoryService }