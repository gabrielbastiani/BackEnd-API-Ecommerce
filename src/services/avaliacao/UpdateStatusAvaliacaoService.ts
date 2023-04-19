import prismaClient from "../../prisma";

interface AvaliacaoRequest {
    avaliacao_id: string;
    status: string;
}

class UpdateStatusAvaliacaoService {
    async execute({ avaliacao_id, status }: AvaliacaoRequest) {
        const avaliacao = await prismaClient.avaliacao.update({
            where: {
                id: String(avaliacao_id)
            },
            data: {
                status: status
            }
        })

        return avaliacao;

    }
}

export { UpdateStatusAvaliacaoService }