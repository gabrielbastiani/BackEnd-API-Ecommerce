import prismaClient from '../../prisma';

interface VariationRequest {
    variation_id: string;
    order: number;
}

class UpdateOrderVariationService {
    async execute({ variation_id, order }: VariationRequest) {
        const orderVaricao = await prismaClient.variation.update({
            where: {
                id: variation_id
            },
            data: {
                order: order,
            }
        })
        return orderVaricao;
    }
}

export { UpdateOrderVariationService }