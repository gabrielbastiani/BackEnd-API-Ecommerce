import prismaClient from "../../prisma";

interface AvaliacaoRequest {
    avaliacao_id: string;
}

class DeleteAvaliacaoService {
    async execute({ avaliacao_id }: AvaliacaoRequest) {
        const avaliacao = await prismaClient.avaliacao.delete({
            where: {
                id: avaliacao_id
            }
        })

        return avaliacao;
    }

}

export { DeleteAvaliacaoService }