import prismaClient from '../../prisma';

interface VariacoesRequest {
    variacao_id: string;
}

class AllVariacoesService {
    async execute({ variacao_id }: VariacoesRequest) {
        const allVariacoes = await prismaClient.variacao.findUnique({
            where: {
                id: variacao_id
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

export { AllVariacoesService }