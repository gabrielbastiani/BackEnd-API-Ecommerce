import { StatusGroup } from "@prisma/client";
import prismaClient from "../../../prisma";

interface GroupRequest {
    slugPosicao: any;
    slugCategory: any;
}

class ListPosicaoCategoriesGroupService {
    async execute({ slugPosicao, slugCategory }: GroupRequest) {

        const ids = await prismaClient.menuCategory.findFirst({
            where: {
                slugPosicao: slugPosicao,
                slugCategory: slugCategory,
                status: StatusGroup.Disponivel
            }
        });

        const gruopId = ids.id;

        const group = await prismaClient.menuCategory.findMany({
            where: {
                groupId: gruopId,
                status: StatusGroup.Disponivel
            },
            orderBy: {
                order: 'asc'
            },
            include: {
                category: true,
                imagegroupcategories: true
            }
        });

        const data = {
            group,
            gruopId
        };

        return data;
    }
}

export { ListPosicaoCategoriesGroupService }