import { StatusGroupAtributos } from '@prisma/client';
import prismaClient from "../../../prisma";

interface GroupRequest {
    slugCategoryOrItem: any;
}

class ListPosicaoAtributosFiltrosGroupService {
    async execute({ slugCategoryOrItem }: GroupRequest) {
        const group = await prismaClient.groupFilterAtributo.findMany({
            where: {
                groupId: "",
                slugCategoryOrItem: slugCategoryOrItem,
                status: StatusGroupAtributos.Ativo
            },
            orderBy: {
                order: 'asc'
            },
            include: {
                atributo: true,
                imageAtributoGroups: true
            }
        });

        const data = {
            group
        };

        return data;
    }
}

export { ListPosicaoAtributosFiltrosGroupService }