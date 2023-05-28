import prismaClient from "../../prisma";

interface GroupRequest {
    groupFilter_id: string;
    nameGroup: string;
}

class UpdateNameGroupFilterService {
    async execute({ nameGroup, groupFilter_id }: GroupRequest) {
        const group = await prismaClient.groupFilter.update({
            where: {
                id: groupFilter_id
            },
            data: {
                nameGroup: nameGroup,
            }
        });

        return group;

    }
}

export { UpdateNameGroupFilterService }