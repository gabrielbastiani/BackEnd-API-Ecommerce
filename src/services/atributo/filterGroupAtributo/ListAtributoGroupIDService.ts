import { StatusGroupAtributos } from "@prisma/client";
import prismaClient from "../../../prisma";

interface GroupRequest {
    groupId: string;
}

class ListAtributoGroupIDService {
    async execute({ groupId }: GroupRequest) {
        const grupoAtributos = await prismaClient.groupFilterAtributo.findMany({
            where: {
                groupId: groupId,
                status: StatusGroupAtributos.Ativo
            },
            orderBy: {
                order: 'asc'
            },
            include: {
                atributo: true,
                imageAtributoGroups: true
            }
        })

        return grupoAtributos;
    }
}

export { ListAtributoGroupIDService }