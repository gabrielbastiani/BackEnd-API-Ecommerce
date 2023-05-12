import prismaClient from "../../prisma";

interface GroupRequest {
    nameGroup: string;
    atributoName: string;
    slugCategoryOrItem: string;
    loja_id: string;
}

class CreateGroupFilterService {
    async execute({ nameGroup, atributoName, slugCategoryOrItem, loja_id }: GroupRequest) {
        const group = await prismaClient.groupFilter.create({
            data: {
                nameGroup: nameGroup,
                atributoName: atributoName,
                slugCategoryOrItem: slugCategoryOrItem,
                loja_id: loja_id
            }
        });

        return group;

    }
}

export { CreateGroupFilterService }