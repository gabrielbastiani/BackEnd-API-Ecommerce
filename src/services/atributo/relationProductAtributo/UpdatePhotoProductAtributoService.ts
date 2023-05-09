import prismaClient from "../../../prisma";

interface RelationRequest {
    product_id: string;
    photoProduct_id: string;
}

class UpdatePhotoProductAtributoService {
    async execute({ product_id, photoProduct_id }: RelationRequest) {

        const relation = await prismaClient.relationProductAtributo.updateMany({
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

export { UpdatePhotoProductAtributoService }