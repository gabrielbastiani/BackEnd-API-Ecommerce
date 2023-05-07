import prismaClient from "../../../prisma";

interface RelationRequest {
    product_id: string;
    photoProduct_id1: string;
}

class UpdatePhotoProduct1CategoryService {
    async execute({ product_id, photoProduct_id1 }: RelationRequest) {

        const relation = await prismaClient.relationProductCategory.updateMany({
            where: {
                product_id: product_id
            },
            data: {
                photoProduct_id1: photoProduct_id1
            }
        });

        return relation;

    }
}

export { UpdatePhotoProduct1CategoryService }