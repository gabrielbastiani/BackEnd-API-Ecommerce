import prismaClient from "../../../prisma";

interface MenuCategoryRequest {
    menuCategory_id: string;
}

class FindUniqueMenuIDService {
    async execute({ menuCategory_id }: MenuCategoryRequest) {
        const allMenu = await prismaClient.menuCategory.findUnique({
            where: {
                id: menuCategory_id
            },
            include: {
                category: true,
                imagemenucategories: true
            }
        });

        return allMenu;

    }
}

export { FindUniqueMenuIDService }