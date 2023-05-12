import prismaClient from "../../prisma";

interface GroupRequest {
    groupFilter_id: string;
    slugCategoryOrItem: string;
}

class UpdateSlugGroupFilterService {
    async execute({ slugCategoryOrItem, groupFilter_id }: GroupRequest) {
        const group = await prismaClient.groupFilter.update({
            where: {
                id: groupFilter_id
            },
            data: {
                slugCategoryOrItem: slugCategoryOrItem,
            }
        });

        return group;

    }
}

export { UpdateSlugGroupFilterService }