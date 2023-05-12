import { StatusGroupAtributos } from '@prisma/client';
import prismaClient from "../../../prisma";

interface GroupRequest {
    slugCategoryOrItem: any;
}

class ListPosicaoAtributosFiltrosGroupService {
    async execute({ slugCategoryOrItem }: GroupRequest) {

        const group = await prismaClient.groupFilterAtributo.findMany({
            where: {
                slugCategoryOrItem: slugCategoryOrItem,
                status: StatusGroupAtributos.Ativo,
            },
            include: {
                atributo: {
                    select: {valor: true}
                }
            }
        });

        return group;
    }
}

export { ListPosicaoAtributosFiltrosGroupService }