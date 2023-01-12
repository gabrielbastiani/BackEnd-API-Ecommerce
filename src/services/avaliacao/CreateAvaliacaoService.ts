import prismaClient from "../../prisma";

interface AvaliacaoRequest {
    clientName: string;
    description: string;
    pontuacao: string;
    product_id: string;
    loja_id: string;
}

class CreateAvaliacaoService {
    async execute({ clientName, description, pontuacao, product_id, loja_id }: AvaliacaoRequest) {
        const avaliacao = await prismaClient.avaliacao.create({
            data: {
                clientName: clientName,
                description: description,
                pontuacao: pontuacao,
                product_id: product_id,
                loja_id: loja_id
            },
            select: {
                id: true,
                clientName: true,
                description: true,
                pontuacao: true,
                product_id: true,
                loja_id: true,
                created_at: true
            }
        })

        return avaliacao;

    }
}

export { CreateAvaliacaoService }