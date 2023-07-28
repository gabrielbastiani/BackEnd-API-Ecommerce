import prismaClient from "../../../prisma";

interface VariationRequest {
    product_id: string;
    variationName: string;
    variationProduct: string;
    order: number;
}

class CreateProductVariationService {
    async execute({ product_id, variationName, variationProduct, order }: VariationRequest) {

        const store = await prismaClient.store.findFirst();
        
        const variation = await prismaClient.productVariation.create({
            data: {
                product_id: product_id,
                variationName: variationName,
                variationProduct: variationProduct,
                order: Number(order),
                store_id: store.id
            }
        });

        return variation;

    }
}

export { CreateProductVariationService }