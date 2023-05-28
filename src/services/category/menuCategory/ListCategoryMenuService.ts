import { StatusMenuCategory } from "@prisma/client";
import prismaClient from "../../../prisma";

interface MenuCategoryRequest {
    parentId: string;
}

class ListCategoryMenuService {
    async execute({ parentId }: MenuCategoryRequest) {
        const menuCategory = await prismaClient.menuCategory.findMany({
            where: {
                parentId: parentId,
                status: StatusMenuCategory.Disponivel,
            },
            orderBy: {
                order: 'asc'
            },
            include: {
                category: true,
                imagemenucategories: true
            }
        })

        return menuCategory;
    }
}

export { ListCategoryMenuService }