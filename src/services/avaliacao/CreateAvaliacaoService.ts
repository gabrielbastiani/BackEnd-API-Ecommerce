import prismaClient from "../../prisma";

interface AvaliacaoRequest {
    clientName: string;
    description: string;
    pontuacao: string;
    status: string;
    product_id: string;
    loja_id: string;
}

class CreateAvaliacaoService {
    async execute({ clientName, description, pontuacao, status, product_id, loja_id }: AvaliacaoRequest) {
        const avaliacao = await prismaClient.avaliacao.create({
            data: {
                clientName: clientName,
                description: description,
                pontuacao: pontuacao,
                status: status,
                product_id: product_id,
                loja_id: loja_id
            }
        })

        return avaliacao;

    }
}

export { CreateAvaliacaoService }