import prismaClient from "../../prisma";

interface GroupRequest {
    groupFilter_id: string;
}

class DeleteGroupFilterService {
    async execute({ groupFilter_id }: GroupRequest) {
        const group = await prismaClient.groupFilter.delete({
            where: {
                id: groupFilter_id
            }
        });

        return group;

    }
}

export { DeleteGroupFilterService }