import prismaClient from "../../prisma";

interface AvaliacaoRequest {
    user_id: string;
    description: string;
    pontuacao: string;
    status: string;
    product_id: string;
    store_id: string;
}

class CreateAvaliacaoService {
    async execute({ user_id, description, pontuacao, product_id, store_id }: AvaliacaoRequest) {
        const avaliacao = await prismaClient.avaliacao.create({
            data: {
                user_id: user_id,
                description: description,
                pontuacao: pontuacao,
                status: "Pendente",
                product_id: product_id,
                store_id: store_id
            }
        })

        return avaliacao;

    }
}

export { CreateAvaliacaoService }