import { StatusGroup } from "@prisma/client";
import prismaClient from "../../../prisma";

interface GroupRequest {
    slugPosicao: string;
}

class ListPosicaoCategoriesGroupService {
    async execute({ slugPosicao }: GroupRequest) {

        const ids = await prismaClient.groupCategoy.findFirst({
            where: {
                slugPosicao: slugPosicao,
                status: StatusGroup.Ativo
            }
        })

        const group = await prismaClient.groupCategoy.findMany({
            where: {
                groupId: ids.id,
                slugPosicao: slugPosicao,
                status: StatusGroup.Ativo,
            },
            orderBy: {
                order: 'asc'
            },
            include: {
                category: true,
                imagegroupcategories: true
            }
        })

        return group;
    }
}

export { ListPosicaoCategoriesGroupService }