import prismaClient from '../../../../prisma';

interface ImageCategRrequest {
    imageGroupCategory_id: string;
}

class ListExactImageCategoryGroupService {
    async execute({ imageGroupCategory_id }: ImageCategRrequest) {
        const exactImage = await prismaClient.imageGroupCategory.findUnique({
            where: {
                id: imageGroupCategory_id
            }
        });

        return exactImage;
        
    }
}

export { ListExactImageCategoryGroupService }