import prismaClient from '../../../../prisma';

interface FilterCategoryRequest {
    imageFilterCategory_id: string;
}

class ListExactImageFiltroCategoryService {
    async execute({ imageFilterCategory_id }: FilterCategoryRequest) {
        const exactImage = await prismaClient.imageFilterCategory.findUnique({
            where: {
                id: imageFilterCategory_id
            }
        });

        return exactImage;

    }
}

export { ListExactImageFiltroCategoryService }