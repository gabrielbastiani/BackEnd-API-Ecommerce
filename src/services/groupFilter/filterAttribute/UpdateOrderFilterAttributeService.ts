import prismaClient from "../../../prisma";

interface FilterAttributeRequest {
    filterAttribute_id: string;
    order: number;
}

class UpdateOrderFilterAttributeService {
    async execute({ order, filterAttribute_id }: FilterAttributeRequest) {
        const filter = await prismaClient.filterAttribute.update({
            where: {
                id: filterAttribute_id
            },
            data: {
                order: order,
            }
        });

        return filter;

    }
}

export { UpdateOrderFilterAttributeService }