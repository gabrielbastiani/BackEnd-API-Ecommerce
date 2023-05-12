import prismaClient from "../../../prisma";

interface FiltroAtributoRequest {
    filterAtributo_id: string;
    atributoName: string;
}

class UpdateAtributoNameFiltroService {
    async execute({ atributoName, filterAtributo_id }: FiltroAtributoRequest) {
        const filter = await prismaClient.filterAtributo.update({
            where: {
                id: filterAtributo_id
            },
            data: {
                atributoName: atributoName,
            }
        });

        return filter;

    }
}

export { UpdateAtributoNameFiltroService }