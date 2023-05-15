import prismaClient from "../../../prisma";

interface FiltroAtributoRequest {
    groupFilter_id: string;
    valor: string;
    order: number;
    slugCategoryOrItem: string;
    loja_id: string;
}

class CreateFiltroAtributoService {
    async execute({ groupFilter_id, slugCategoryOrItem, valor, order, loja_id }: FiltroAtributoRequest) {
        const filterAtributo = await prismaClient.filterAtributo.create({
            data: {
                groupFilter_id: groupFilter_id,
                valor: valor,
                order: order,
                slugCategoryOrItem: slugCategoryOrItem,
                loja_id: loja_id
            }
        });

        return filterAtributo;

    }
}

export { CreateFiltroAtributoService }