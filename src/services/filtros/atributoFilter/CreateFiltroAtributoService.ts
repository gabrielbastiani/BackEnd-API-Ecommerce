import prismaClient from "../../../prisma";

interface FiltroAtributoRequest {
    groupFilter_id: string;
    valor: string;
    order: number;
    store_id: string;
}

class CreateFiltroAtributoService {
    async execute({ groupFilter_id, valor, order, store_id }: FiltroAtributoRequest) {
        const filterAtributo = await prismaClient.filterAtributo.create({
            data: {
                groupFilter_id: groupFilter_id,
                valor: valor,
                order: order,
                store_id: store_id
            }
        });

        return filterAtributo;

    }
}

export { CreateFiltroAtributoService }