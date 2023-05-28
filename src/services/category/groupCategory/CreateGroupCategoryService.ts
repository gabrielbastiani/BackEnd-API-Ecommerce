import prismaClient from "../../../prisma";

interface GroupRequest {
    nameGroup: string;
    itemName: string;
    slugCategory: string;
    category_id: string;
    nivel: number;
    groupId: string;
    order: number;
    posicao: string;
    slugPosicao: string;
    store_id: string;
}

class CreateGroupCategoryService {
    async execute({ nameGroup, itemName, slugCategory, category_id, nivel, groupId, order, posicao, store_id }: GroupRequest) {

        function removerAcentos(s: any) {
            return s.normalize('NFD')
                .replace(/[\u0300-\u036f]/g, "")
                .toLowerCase()
                .replace(/ +/g, "-")
                .replace(/-{2,}/g, "-")
                .replace(/[/]/g, "-");
        }

        const relationGroup = await prismaClient.menuCategory.create({
            data: {
                nameGroup: nameGroup,
                itemName: itemName,
                slugCategory: slugCategory,
                category_id: category_id,
                nivel: nivel,
                groupId: groupId,
                order: Number(order),
                posicao: posicao,
                slugPosicao: removerAcentos(posicao),
                store_id: store_id
            }
        });

        return relationGroup;

    }
}

export { CreateGroupCategoryService }