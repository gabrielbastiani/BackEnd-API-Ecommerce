import prismaClient from "../../../prisma";

interface FilterAttributeRequest {
    groupFilter_id: string;
}

class DeleteAllFilterAttributeService {
    async execute({ groupFilter_id }: FilterAttributeRequest) {
        const filter = await prismaClient.filterAttribute.deleteMany({
            where: {
                groupFilter_id: groupFilter_id
            }
        });

        return filter;

    }
}

export { DeleteAllFilterAttributeService }