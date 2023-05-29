import prismaClient from "../../../prisma";

interface FilterAttributeRequest {
    filterAttribute_id: string;
    groupFilter_id: string;
}

class UpdateNameFilterAttributeService {
    async execute({ groupFilter_id, filterAttribute_id }: FilterAttributeRequest) {
        const filter = await prismaClient.filterAttribute.update({
            where: {
                id: filterAttribute_id
            },
            data: {
                groupFilter_id: groupFilter_id,
            }
        });

        return filter;

    }
}

export { UpdateNameFilterAttributeService }