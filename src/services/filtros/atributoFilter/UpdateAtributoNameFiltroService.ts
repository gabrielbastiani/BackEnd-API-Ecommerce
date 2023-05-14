import prismaClient from "../../../prisma";

interface FiltroAtributoRequest {
    filterAtributo_id: string;
    groupFilter_id: string;
}

class UpdateAtributoNameFiltroService {
    async execute({ groupFilter_id, filterAtributo_id }: FiltroAtributoRequest) {
        const filter = await prismaClient.filterAtributo.update({
            where: {
                id: filterAtributo_id
            },
            data: {
                groupFilter_id: groupFilter_id,
            }
        });

        return filter;

    }
}

export { UpdateAtributoNameFiltroService }