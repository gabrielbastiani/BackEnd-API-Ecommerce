import prismaClient from "../../../prisma";

interface FilterAttributeRequest {
    filterAttribute_id: string;
}

class DeleteFilterAttributeService {
    async execute({ filterAttribute_id }: FilterAttributeRequest) {
        const filter = await prismaClient.filterAttribute.delete({
            where: {
                id: filterAttribute_id
            }
        });

        return filter;

    }
}

export { DeleteFilterAttributeService }