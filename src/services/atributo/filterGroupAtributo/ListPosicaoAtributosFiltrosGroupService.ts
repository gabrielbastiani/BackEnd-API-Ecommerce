import { StatusGroupAtributos } from '@prisma/client';
import prismaClient from "../../../prisma";

interface GroupRequest {
    slugCategoryOrItem: any;
}

class ListPosicaoAtributosFiltrosGroupService {
    async execute({ slugCategoryOrItem }: GroupRequest) {

        /* const ids = await prismaClient.groupFilterAtributo.findFirst({
            where: {
                slugCategoryOrItem: slugCategoryOrItem,
                status: StatusGroupAtributos.Ativo
            }
        });

        const gruopId = ids.id; */

        const group = await prismaClient.groupFilterAtributo.findMany({
            where: {
                /* groupId: gruopId, */
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
            group,
            /* gruopId */
        };

        return data;
    }
}

export { ListPosicaoAtributosFiltrosGroupService }