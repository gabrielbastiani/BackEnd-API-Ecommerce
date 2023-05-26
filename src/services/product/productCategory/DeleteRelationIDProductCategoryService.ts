import prismaClient from "../../../prisma";

interface RelationRequest {
    relationProductCategory_id: string;
}

class DeleteRelationIDProductCategoryService {
    async execute({ relationProductCategory_id }: RelationRequest) {

        const idNivel = await prismaClient.productCategory.findUnique({
            where: {
                id: relationProductCategory_id
            }
        });

        const idNivelRelations = await prismaClient.productCategory.findMany();
        const idsRelat = idNivelRelations.map((item) => item.parentId);

        const filtrado = idsRelat.filter(function (obj) { return idNivel.id === obj });

        if (String(filtrado) === idNivel.id) {
            throw new Error("Delete as categorias filhas desta de trás para frente antes!!!");
        }

        const relation = await prismaClient.productCategory.delete({
            where: {
                id: relationProductCategory_id
            }
        });

        return relation;

    }
}

export { DeleteRelationIDProductCategoryService }