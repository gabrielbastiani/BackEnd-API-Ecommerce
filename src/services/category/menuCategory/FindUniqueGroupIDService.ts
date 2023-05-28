import prismaClient from "../../../prisma";

interface GroupRequest {
    groupCategoy_id: string;
}

class FindUniqueGroupIDService {
    async execute({ groupCategoy_id }: GroupRequest) {
        const allGroupsId = await prismaClient.menuCategory.findUnique({
            where: {
                id: groupCategoy_id
            },
            include: {
                category: true,
                imagegroupcategories: true
            }
        });

        return allGroupsId;

    }
}

export { FindUniqueGroupIDService }