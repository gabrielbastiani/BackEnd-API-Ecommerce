import prismaClient from "../../prisma";

interface GroupRequest {
    groupFilter_id: string;
    type: string;
}

class UpdateTypeAttributeGroupService {
    async execute({ type, groupFilter_id }: GroupRequest) {
        const group = await prismaClient.groupFilter.update({
            where: {
                id: groupFilter_id
            },
            data: {
                type: type,
            }
        });

        return group;

    }
}

export { UpdateTypeAttributeGroupService }