import prismaClient from '../../../prisma';

interface VariationRequest {
    productVariation_id: string;
    order: number;
}

class UpdateOrderProductVariationService {
    async execute({ productVariation_id, order }: VariationRequest) {
        const orderVaricao = await prismaClient.productVariation.update({
            where: {
                id: productVariation_id
            },
            data: {
                order: order,
            }
        })
        return orderVaricao;
    }
}

export { UpdateOrderProductVariationService }