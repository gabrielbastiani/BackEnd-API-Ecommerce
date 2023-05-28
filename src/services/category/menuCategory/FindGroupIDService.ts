import prismaClient from "../../../prisma";

interface GroupRequest {
    groupId: string;
}

class FindGroupIDService {
    async execute({ groupId }: GroupRequest) {
        const allGroupsId = await prismaClient.menuCategory.findMany({
            where: {
                groupId: groupId
            },
            orderBy: {
                order: 'asc'
            },
            include: {
                category: true,
                imagegroupcategories: true
            }
        });

        return allGroupsId;

    }
}

export { FindGroupIDService }