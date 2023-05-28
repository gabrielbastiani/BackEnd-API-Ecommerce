import prismaClient from "../../../prisma";

interface MenuCategoryRequest {
    parentId: string;
}

class FindMenuIDService {
    async execute({ parentId }: MenuCategoryRequest) {
        const allMenuId = await prismaClient.menuCategory.findMany({
            where: {
                parentId: parentId
            },
            orderBy: {
                order: 'asc'
            },
            include: {
                category: true,
                imagemenucategories: true
            }
        });

        return allMenuId;

    }
}

export { FindMenuIDService }