import prismaClient from "../../../prisma";

interface RelationRequest {
    product_id: string;
    photoProduct_id: string;
}

class UpdatePhotoProductCategoryService {
    async execute({ product_id, photoProduct_id }: RelationRequest) {

        const relation = await prismaClient.relationProductCategory.updateMany({
            where: {
                product_id: product_id
            },
            data: {
                photoProduct_id: photoProduct_id
            }
        });

        return relation;

    }
}

export { UpdatePhotoProductCategoryService }