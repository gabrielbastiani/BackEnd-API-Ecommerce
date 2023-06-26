import { StatusCategory, StatusMenuCategory } from "@prisma/client";
import prismaClient from "../../../prisma";

interface MenuCategoryRequest {
    parentId: string;
}

class MenuCategoryService {
    async execute({ parentId }: MenuCategoryRequest) {
        const menuCategory = await prismaClient.menuCategory.findMany({
            where: {
                status: StatusMenuCategory.Disponivel,
                category: {
                    status: StatusCategory.Disponivel,
                    parentId: parentId
                }
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

export { MenuCategoryService }