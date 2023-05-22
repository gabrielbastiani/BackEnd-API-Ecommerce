import prismaClient from "../../prisma";

interface GroupRequest {
    nameGroup: string;
    atributoName: string;
    slugCategory: string;
    loja_id: string;
}

class CreateGroupFilterService {
    async execute({ nameGroup, atributoName, slugCategory, loja_id }: GroupRequest) {
        const group = await prismaClient.groupFilter.create({
            data: {
                nameGroup: nameGroup,
                atributoName: atributoName,
                slugCategory: slugCategory,
                loja_id: loja_id
            }
        });

        return group;

    }
}

export { CreateGroupFilterService }