import prismaClient from "../../../prisma";

interface RelationRequest {
    groupNumber: number;
    nameGroup: string;
    itemName: string;
    atributo_id: string;
    slugCategoryOrItem: string;
    order: number;
    nivel: number;
    groupId: string;
    loja_id: string;
}

class CreateFilterAtributosServices {
    async execute({
        groupNumber,
        nameGroup,
        itemName,
        atributo_id,
        slugCategoryOrItem,
        order,
        nivel,
        groupId,
        loja_id
    }: RelationRequest) {
        const relation = await prismaClient.groupFilterAtributo.create({
            data: {
                groupNumber: groupNumber,
                nameGroup: nameGroup,
                itemName: itemName,
                atributo_id: atributo_id,
                slugCategoryOrItem: slugCategoryOrItem,
                order: order,
                nivel: nivel,
                groupId: groupId,
                loja_id: loja_id
            }
        });

        return relation;

    }
}

export { CreateFilterAtributosServices }