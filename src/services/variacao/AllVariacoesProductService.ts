import prismaClient from '../../prisma';

interface VariacoesRequest {
    product_id: string;
}

class AllVariacoesProductService {
    async execute({ product_id }: VariacoesRequest) {
        const allVariacoes = await prismaClient.variacao.findMany({
            where: {
                product_id: product_id
            },
            orderBy: {
                order: 'asc'
            },
            include: {
                product: true,
                photovariacoes: true,
                loja: true
            }
        });

        return allVariacoes;

    }
}

export { AllVariacoesProductService }