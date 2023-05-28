import prismaClient from "../../prisma";

interface GroupRequest {
    groupFilter_id: string;
    slugCategory: string;
}

class UpdateSlugGroupFilterService {
    async execute({ slugCategory, groupFilter_id }: GroupRequest) {
        const group = await prismaClient.groupFilter.update({
            where: {
                id: groupFilter_id
            },
            data: {
                slugCategory: slugCategory,
            }
        });

        return group;

    }
}

export { UpdateSlugGroupFilterService }