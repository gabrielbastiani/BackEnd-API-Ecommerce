import prismaClient from "../../../prisma";

interface FilterRequest {
    groupFilterAtributo_id: string;
    itemName: string;
}

class UpdateItemNameFiltroService {
    async execute({
        groupFilterAtributo_id,
        itemName,
    }: FilterRequest) {
        const updateItem = await prismaClient.groupFilterAtributo.update({
            where: {
                id: groupFilterAtributo_id
            },
            data: {
                itemName: itemName
            }
        });

        return updateItem;

    }
}

export { UpdateItemNameFiltroService }