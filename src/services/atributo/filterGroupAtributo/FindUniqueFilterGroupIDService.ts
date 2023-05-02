import prismaClient from "../../../prisma";

interface GroupRequest {
    groupFilterAtributo_id: string;
}

class FindUniqueFilterGroupIDService {
    async execute({ groupFilterAtributo_id }: GroupRequest) {
        const allGroupsId = await prismaClient.groupFilterAtributo.findUnique({
            where: {
                id: groupFilterAtributo_id
            },
            include: {
                atributo: true,
                imageAtributoGroups: true
            }
        });

        return allGroupsId;

    }
}

export { FindUniqueFilterGroupIDService }