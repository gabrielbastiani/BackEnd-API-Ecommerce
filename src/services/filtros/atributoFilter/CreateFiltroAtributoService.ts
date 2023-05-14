import prismaClient from "../../../prisma";

interface FiltroAtributoRequest {
    groupFilter_id: string;
    valor: string;
    order: number;
    loja_id: string;
}

class CreateFiltroAtributoService {
    async execute({ groupFilter_id, valor, order, loja_id }: FiltroAtributoRequest) {
        const filterAtributo = await prismaClient.filterAtributo.create({
            data: {
                groupFilter_id: groupFilter_id,
                valor: valor,
                order: order,
                loja_id: loja_id
            }
        });

        return filterAtributo;

    }
}

export { CreateFiltroAtributoService }