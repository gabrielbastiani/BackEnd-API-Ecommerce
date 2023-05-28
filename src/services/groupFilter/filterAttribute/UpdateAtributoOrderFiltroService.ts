import prismaClient from "../../../prisma";

interface FiltroAtributoRequest {
    filterAtributo_id: string;
    order: number;
}

class UpdateAtributoOrderFiltroService {
    async execute({ order, filterAtributo_id }: FiltroAtributoRequest) {
        const filter = await prismaClient.filterAtributo.update({
            where: {
                id: filterAtributo_id
            },
            data: {
                order: order,
            }
        });

        return filter;

    }
}

export { UpdateAtributoOrderFiltroService }