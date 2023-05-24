import prismaClient from "../../prisma";

interface GroupRequest {
    nameGroup: string;
    atributoName: string;
    slugCategory: string;
    store_id: string;
}

class CreateGroupFilterService {
    async execute({ nameGroup, atributoName, slugCategory, store_id }: GroupRequest) {
        const group = await prismaClient.groupFilter.create({
            data: {
                nameGroup: nameGroup,
                atributoName: atributoName,
                slugCategory: slugCategory,
                store_id: store_id
            }
        });

        return group;

    }
}

export { CreateGroupFilterService }