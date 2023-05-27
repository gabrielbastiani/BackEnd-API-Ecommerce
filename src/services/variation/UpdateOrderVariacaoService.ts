import prismaClient from '../../prisma';

interface VariacaoRequest {
    variacao_id: any;
    order: number;
}

class UpdateOrderVariacaoService {
    async execute({ variacao_id, order }: VariacaoRequest) {
        const orderVaricao = await prismaClient.variacao.update({
            where: {
                id: String(variacao_id)
            },
            data: {
                order: order,
            }
        })
        return orderVaricao;
    }
}

export { UpdateOrderVariacaoService }