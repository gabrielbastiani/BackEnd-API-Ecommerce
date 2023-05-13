import prismaClient from '../../../../prisma';

interface FiltroCategoryRequest {
    imageFilterCategory_id: string;
}

class ListExactImageFiltroCategoryService {
    async execute({ imageFilterCategory_id }: FiltroCategoryRequest) {
        const exactImage = await prismaClient.imageFilterCategory.findUnique({
            where: {
                id: imageFilterCategory_id
            }
        });

        return exactImage;

    }
}

export { ListExactImageFiltroCategoryService }