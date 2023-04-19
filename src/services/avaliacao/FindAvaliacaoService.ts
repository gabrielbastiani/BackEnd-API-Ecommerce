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
            include: {
                product: true
            }
        });

        return avaliacaoFind;

    }
}

export { FindAvaliacaoService }