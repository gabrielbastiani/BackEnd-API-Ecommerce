import prismaClient from "../../../prisma";

interface MenuCategoryRequest {
    menuCategory_id: string;
    order: number;
}

class UpdateOrderCategoryMenuService {
    async execute({ menuCategory_id, order }: MenuCategoryRequest) {
        const orderMenu = await prismaClient.menuCategory.update({
            where: {
                id: menuCategory_id
            },
            data: {
                order: order
            }
        });

        return orderMenu;

    }
}

export { UpdateOrderCategoryMenuService }