import prismaClient from "../../../prisma";

interface FiltroAtributoRequest {
    filterAtributo_id: string;
}

class DeleteAtributoFiltroService {
    async execute({ filterAtributo_id }: FiltroAtributoRequest) {
        const filter = await prismaClient.filterAtributo.delete({
            where: {
                id: filterAtributo_id
            }
        });

        return filter;

    }
}

export { DeleteAtributoFiltroService }