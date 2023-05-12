import prismaClient from "../../../prisma";

interface FiltroAtributoRequest {
    filterAtributo_id: string;
    valor: string;
}

class UpdateAtributoValorFiltroService {
    async execute({ valor, filterAtributo_id }: FiltroAtributoRequest) {
        const filter = await prismaClient.filterAtributo.update({
            where: {
                id: filterAtributo_id
            },
            data: {
                valor: valor,
            }
        });

        return filter;

    }
}

export { UpdateAtributoValorFiltroService }