import prismaClient from "../../prisma";

interface GroupRequest {
    groupFilter_id: string;
    atributoName: string;
}

class UpdateAtributoNameService {
    async execute({ atributoName, groupFilter_id }: GroupRequest) {
        const group = await prismaClient.groupFilter.update({
            where: {
                id: groupFilter_id
            },
            data: {
                atributoName: atributoName,
            }
        });

        return group;

    }
}

export { UpdateAtributoNameService }