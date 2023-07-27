import prismaClient from "../../prisma";

interface VariationRequest {
    product_id: string;
    variation_id: string;
    order: number;
    store_id: string;
}

class CreateProductVariationService {
    async execute({ product_id, variation_id, order, store_id }: VariationRequest) {
        const variation = await prismaClient.productVariation.create({
            data: {
                product_id: product_id,
                variation_id: variation_id,
                order: Number(order),
                store_id: store_id
            }
        });

        return variation;

    }
}

export { CreateProductVariationService }