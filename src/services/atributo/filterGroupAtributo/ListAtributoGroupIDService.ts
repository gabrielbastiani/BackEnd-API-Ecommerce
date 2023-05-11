import { StatusGroupAtributos } from "@prisma/client";
import prismaClient from "../../../prisma";

interface GroupRequest {
    groupId: any;
}

class ListAtributoGroupIDService {
    async execute({ groupId }: GroupRequest) {
        const grupoAtributos = await prismaClient.groupFilterAtributo.findMany({
            where: {
                groupId: {in: groupId},
                nivel: 1,
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

        return grupoAtributos;
    }
}

export { ListAtributoGroupIDService }