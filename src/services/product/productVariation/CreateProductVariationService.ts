import prismaClient from "../../../prisma";

interface VariationRequest {
    product_id: string;
    variationName: string;
    variationProduct: string;
    order: number;
    store_id: string;
}

class CreateProductVariationService {
    async execute({ product_id, variationName, variationProduct, order, store_id }: VariationRequest) {
        const variation = await prismaClient.productVariation.create({
            data: {
                product_id: product_id,
                variationName: variationName,
                variationProduct: variationProduct,
                order: Number(order),
                store_id: store_id
            }
        });

        return variation;

    }
}

export { CreateProductVariationService }