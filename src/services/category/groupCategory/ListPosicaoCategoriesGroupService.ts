import { StatusGroup } from "@prisma/client";
import prismaClient from "../../../prisma";

interface GroupRequest {
    slugPosicao: any;
    slugCategory: any;
}

class ListPosicaoCategoriesGroupService {
    async execute({ slugPosicao, slugCategory }: GroupRequest) {

        const ids = await prismaClient.groupCategoy.findFirst({
            where: {
                slugPosicao: slugPosicao,
                slugCategory: slugCategory,
                status: StatusGroup.Ativo
            }
        });

        const gruopId = ids.id;

        const group = await prismaClient.groupCategoy.findMany({
            where: {
                groupId: gruopId,
                status: StatusGroup.Ativo
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