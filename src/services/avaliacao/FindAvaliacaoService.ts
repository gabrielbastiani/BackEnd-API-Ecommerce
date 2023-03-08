import prismaClient from '../../prisma';

interface AvaliacaoRequest {
    avaliacao_id: string;
}

class FindAvaliacaoService {
    async execute({ avaliacao_id }: AvaliacaoRequest) {
        const avaliacaoFind = await prismaClient.avaliacao.findUnique({
            where: {
                id: avaliacao_id
            },
            select: {
                id: true,
                clientName: true,
                description: true,
                pontuacao: true,
                product_id: true,
                created_at: true,
            }
        });

        return avaliacaoFind;

    }
}

export { FindAvaliacaoService }