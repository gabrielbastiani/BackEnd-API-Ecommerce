import prismaClient from "../../../prisma";

interface AtributoRequest {
    relationProductAtributo_id: string;
    atributo_id: string;
}

class UpdateAtributoProductRelationService {
    async execute({
        relationProductAtributo_id,
        atributo_id,
    }: AtributoRequest) {
        const updateAtributo = await prismaClient.relationProductAtributo.update({
            where: {
                id: relationProductAtributo_id
            },
            data: {
                atributo_id: atributo_id
            }
        })

        return updateAtributo;

    }
}

export { UpdateAtributoProductRelationService }