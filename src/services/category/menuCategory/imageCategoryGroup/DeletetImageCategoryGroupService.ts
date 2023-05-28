import prismaClient from '../../../../prisma';

interface ImageCategRrequest {
    imageGroupCategory_id: string;
}

class DeletetImageCategoryGroupService {
    async execute({ imageGroupCategory_id }: ImageCategRrequest) {
        const exactImage = await prismaClient.imageGroupCategory.delete({
            where: {
                id: imageGroupCategory_id
            }
        });

        return exactImage;
        
    }
}

export { DeletetImageCategoryGroupService }