import prismaClient from "../../../prisma";

interface GroupRequest {
    groupFilterAtributo_id: string;
}

class DeleteAtributoFiltroService {
    async execute({ groupFilterAtributo_id }: GroupRequest) {
        const filtroAtributo = await prismaClient.groupFilterAtributo.delete({
            where: {
                id: groupFilterAtributo_id
            }
        });

        return filtroAtributo;

    }
}

export { DeleteAtributoFiltroService }