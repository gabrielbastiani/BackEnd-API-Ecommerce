import { StatusCategory, StatusGroup } from "@prisma/client";
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

        const dados = await prismaClient.category.findFirst({
            where: {
                slug: slugCategoryOrItem,
                disponibilidade: StatusCategory.Disponivel
            }
        });

        const data = {
            dados,
            group
        };

        return data;
    }
}

export { ListPosicaoCategoriesGroupService }