import prismaClient from "../../../prisma";

interface GroupRequest {
    nameGroup: string;
    category_id: string;
    nivel: number;
    groupId: string;
    order: number;
    posicao: string;
    slugPosicao: string;
    loja_id: string;
}

class CreateGroupCategoryService {
    async execute({ nameGroup, category_id, nivel, groupId, order, posicao, loja_id }: GroupRequest) {

        function removerAcentos(s: any) {
            return s.normalize('NFD')
                .replace(/[\u0300-\u036f]/g, "")
                .toLowerCase()
                .replace(/ +/g, "-")
                .replace(/-{2,}/g, "-")
                .replace(/[/]/g, "-");
        }

        const relationGroup = await prismaClient.groupCategoy.create({
            data: {
                nameGroup: nameGroup,
                category_id: category_id,
                nivel: nivel,
                groupId: groupId,
                order: Number(order),
                posicao: posicao,
                slugPosicao: removerAcentos(posicao),
                loja_id: loja_id
            }
        });

        return relationGroup;

    }
}

export { CreateGroupCategoryService }