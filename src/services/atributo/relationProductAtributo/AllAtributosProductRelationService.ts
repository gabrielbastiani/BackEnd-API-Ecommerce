import prismaClient from "../../../prisma";

interface FindsRequest {
    variacao_id: string;
}

class AllAtributosProductRelationService {
    async execute({ variacao_id }: FindsRequest) {
        const allAtributos = await prismaClient.relationProductAtributo.findMany({
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

        return allAtributos;

    }
}

export { AllAtributosProductRelationService }