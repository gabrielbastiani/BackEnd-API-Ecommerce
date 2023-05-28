import { StatusMenuCategory } from "@prisma/client";
import prismaClient from "../../../prisma";

interface MenuCategoryRequest {
    slugPosition: string;
    slugCategory: string;
}

class ListPositionMenuCategoryService {
    async execute({ slugPosition, slugCategory }: MenuCategoryRequest) {

        const ids = await prismaClient.menuCategory.findFirst({
            where: {
                slugPosition: slugPosition,
                slugCategory: slugCategory,
                status: StatusMenuCategory.Disponivel
            }
        });

        const parentId = ids.id;

        const group = await prismaClient.menuCategory.findMany({
            where: {
                parentId: parentId,
                status: StatusMenuCategory.Disponivel
            },
            orderBy: {
                order: 'asc'
            },
            include: {
                category: true,
                imagemenucategories: true
            }
        });

        const data = {
            group,
            parentId
        };

        return data;
    }
}

export { ListPositionMenuCategoryService }