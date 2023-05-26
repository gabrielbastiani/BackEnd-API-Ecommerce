import prismaClient from "../../../prisma";

interface FindsRequest {
    variacao_id: string;
}

class FirstAtributosProductRelationService {
    async execute({ variacao_id }: FindsRequest) {
        const dataRelationAtributo = await prismaClient.relationProductAtributo.findFirst({
            where: {
                variacao_id: variacao_id,
            },
            orderBy: {
                order: 'asc'
            },
            include: {
                atributo: true,
                product: true,
                variacao: true
            }
        });

        return dataRelationAtributo;

    }
}

export { FirstAtributosProductRelationService }