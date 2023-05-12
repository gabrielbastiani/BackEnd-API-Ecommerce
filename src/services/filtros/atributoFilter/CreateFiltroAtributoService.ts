import prismaClient from "../../../prisma";

interface FiltroAtributoRequest {
    atributoName: string;
    valor: string;
    order: number;
    loja_id: string;
}

class CreateFiltroAtributoService {
    async execute({ atributoName, valor, order, loja_id }: FiltroAtributoRequest) {
        const filterAtributo = await prismaClient.filterAtributo.create({
            data: {
                atributoName: atributoName,
                valor: valor,
                order: order,
                loja_id: loja_id
            }
        });

        return filterAtributo;

    }
}

export { CreateFiltroAtributoService }