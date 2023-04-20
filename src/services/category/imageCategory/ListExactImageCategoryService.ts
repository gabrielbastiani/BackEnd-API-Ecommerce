import prismaClient from '../../../prisma';

class ListExactImageCategoryService {
    async execute({ imageCategory_id }) {
        const exactImage = await prismaClient.imageCategory.findUnique({
            where: {
                id: String(imageCategory_id)
            }
        });

        return exactImage;
        
    }
}

export { ListExactImageCategoryService }