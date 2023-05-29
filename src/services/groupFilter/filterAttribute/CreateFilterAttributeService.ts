import prismaClient from "../../../prisma";

interface FilterAttributeRequest {
    groupFilter_id: string;
    value: string;
    order: number;
    store_id: string;
}

class CreateFilterAttributeService {
    async execute({ groupFilter_id, value, order, store_id }: FilterAttributeRequest) {
        const filterAttribute = await prismaClient.filterAttribute.create({
            data: {
                groupFilter_id: groupFilter_id,
                value: value,
                order: order,
                store_id: store_id
            }
        });

        return filterAttribute;

    }
}

export { CreateFilterAttributeService }