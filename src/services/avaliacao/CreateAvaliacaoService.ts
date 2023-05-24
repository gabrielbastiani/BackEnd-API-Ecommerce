import prismaClient from "../../prisma";

interface AvaliacaoRequest {
    admin_id: string;
    description: string;
    pontuacao: string;
    status: string;
    product_id: string;
    store_id: string;
}

class CreateAvaliacaoService {
    async execute({ admin_id, description, pontuacao, product_id, store_id }: AvaliacaoRequest) {
        const avaliacao = await prismaClient.avaliacao.create({
            data: {
                admin_id: admin_id,
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