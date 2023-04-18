import prismaClient from "../../prisma";

interface RelationRequest {
    relationProductCategory_id: string;
}

class DeleteRelationIDProductCategoryService {
    async execute({ relationProductCategory_id }: RelationRequest) {

        const idNivel = await prismaClient.relationProductCategory.findUnique({
            where: {
                id: relationProductCategory_id
            }
        });

        const idNivelRelations = await prismaClient.relationProductCategory.findMany();
        const idsRelat = idNivelRelations.map((item) => item.relationId);

        const filtrado = idsRelat.filter(function (objet) { return idNivel.id === objet });

        console.log(idNivel.id)

        console.log(String(filtrado))

        if (String(filtrado) != idNivel.id) {
            throw new Error("Delete as categorias filhas desta de trás para frente antes!!!");
        }

        const relation = await prismaClient.relationProductCategory.delete({
            where: {
                id: relationProductCategory_id
            }
        });

        return relation;

    }
}

export { DeleteRelationIDProductCategoryService }