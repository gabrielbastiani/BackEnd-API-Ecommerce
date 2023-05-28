import prismaClient from "../../prisma";

interface GroupRequest {
    nameGroup: string;
    type: string;
    slugCategory: string;
    order: number;
    store_id: string;
}

class CreateGroupFilterService {
    async execute({ nameGroup, type, slugCategory, order, store_id }: GroupRequest) {
        const group = await prismaClient.groupFilter.create({
            data: {
                nameGroup: nameGroup,
                type: type,
                slugCategory: slugCategory,
                order: Number(order),
                store_id: store_id
            }
        });

        return group;

    }
}

export { CreateGroupFilterService }