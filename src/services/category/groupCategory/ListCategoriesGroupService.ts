import { StatusGroup } from "@prisma/client";
import prismaClient from "../../../prisma";

interface GroupRequest {
    groupId: string;
}

class ListCategoriesGroupService {
    async execute({ groupId }: GroupRequest) {
        const groupCategories = await prismaClient.groupCategoy.findMany({
            where: {
                groupId: groupId,
                status: StatusGroup.Disponivel,
            },
            orderBy: {
                order: 'asc'
            },
            include: {
                category: true,
                imagegroupcategories: true
            }
        })

        return groupCategories;
    }
}

export { ListCategoriesGroupService }