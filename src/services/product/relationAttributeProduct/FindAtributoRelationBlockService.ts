import prismaClient from '../../../prisma';

interface FindsRequest {
    product_id: string;
}

class FindAtributoRelationBlockService {
    async execute({ product_id }: FindsRequest) {
        const allAtributos = await prismaClient.relationProductAtributo.findMany({
            where: {
                product_id: product_id,
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

export { FindAtributoRelationBlockService }