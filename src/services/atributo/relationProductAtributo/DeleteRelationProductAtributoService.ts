import prismaClient from "../../../prisma";

interface RelationRequest {
    relationProductAtributo_id: string;
}

class DeleteRelationProductAtributoService {
    async execute({ relationProductAtributo_id }: RelationRequest) {

        const relationAtributo = await prismaClient.relationProductAtributo.delete({
            where: {
                id: relationProductAtributo_id
            }
        })

        return relationAtributo;
    }

}

export { DeleteRelationProductAtributoService }