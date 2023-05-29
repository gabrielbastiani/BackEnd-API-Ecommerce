import prismaClient from "../../../prisma";

interface FilterAttributeRequest {
    filterAttribute_id: string;
    value: string;
}

class UpdateValueFilterAttributeService {
    async execute({ value, filterAttribute_id }: FilterAttributeRequest) {
        const filter = await prismaClient.filterAttribute.update({
            where: {
                id: filterAttribute_id
            },
            data: {
                value: value,
            }
        });

        return filter;

    }
}

export { UpdateValueFilterAttributeService }