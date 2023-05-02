import prismaClient from "../../../prisma";

interface GroupRequest {
    groupId: string;
}

class FindGroupFiltroIDService {
    async execute({ groupId }: GroupRequest) {
        const allGroupsId = await prismaClient.groupFilterAtributo.findMany({
            where: {
                groupId: groupId
            },
            orderBy: {
                order: 'asc'
            },
            include: {
                atributo: true,
                imageAtributoGroups: true
            }
        });

        return allGroupsId;

    }
}

export { FindGroupFiltroIDService }