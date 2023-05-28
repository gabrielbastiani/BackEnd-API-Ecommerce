import prismaClient from "../../../prisma";

interface GroupRequest {
    groupCategoy_id: string;
    order: number;
}

class UpdateOrderCategoryGroupService {
    async execute({ groupCategoy_id, order }: GroupRequest) {
        const groupOrder = await prismaClient.menuCategory.update({
            where: {
                id: groupCategoy_id
            },
            data: {
                order: order
            }
        });

        return groupOrder;

    }
}

export { UpdateOrderCategoryGroupService }