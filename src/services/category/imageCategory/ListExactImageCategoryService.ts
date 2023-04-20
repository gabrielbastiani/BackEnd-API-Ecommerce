import prismaClient from '../../../prisma';

interface ImageCategRrequest {
    imageCategory_id: string;
}

class ListExactImageCategoryService {
    async execute({ imageCategory_id }: ImageCategRrequest) {
        const exactImage = await prismaClient.imageCategory.findUnique({
            where: {
                id: imageCategory_id
            }
        });

        return exactImage;
        
    }
}

export { ListExactImageCategoryService }