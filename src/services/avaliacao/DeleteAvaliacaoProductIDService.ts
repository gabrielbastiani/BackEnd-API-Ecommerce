import prismaClient from "../../prisma";

interface AvaliacaoRequest {
    product_id: string;
}

class DeleteAvaliacaoProductIDService {
    async execute({ product_id }: AvaliacaoRequest) {
        const avaliacao = await prismaClient.avaliacao.deleteMany({
            where: {
                product_id: product_id
            }
        })

        return avaliacao;
    }

}

export { DeleteAvaliacaoProductIDService }