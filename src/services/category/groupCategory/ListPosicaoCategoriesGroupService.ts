import { StatusGroup } from "@prisma/client";
import prismaClient from "../../../prisma";

interface GroupRequest {
    slugPosicao: any;
    slugCategoryOrItem: any;
}

class ListPosicaoCategoriesGroupService {
    async execute({ slugPosicao, slugCategoryOrItem }: GroupRequest) {

        const ids = await prismaClient.groupCategoy.findFirst({
            where: {
                slugPosicao: slugPosicao,
                slugCategoryOrItem: slugCategoryOrItem,
                status: StatusGroup.Ativo
            }
        });

        const gruopId = ids.id;

        const names = await prismaClient.groupCategoy.findFirst({
            where: {
                groupId: gruopId,
                status: StatusGroup.Ativo
            },
            include: {
                category: true,
                imagegroupcategories: true
            }
        });

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
            names,
            group
        };

        return data;
    }
}

export { ListPosicaoCategoriesGroupService }