import { StatusProductVariation } from "@prisma/client";
import prismaClient from "../../../prisma";

interface VariationRequest {
    product_id: string;
}

class AllVariationsProductInStoreService {
    async execute({ product_id }: VariationRequest) {
        const findVariation = await prismaClient.productVariation.findMany({
            where: {
                product_id: product_id,
                status: StatusProductVariation.Disponivel
            },
            include: {
                product: true,
                photovariations: true
            }
        })
        return findVariation;
    }
}

export { AllVariationsProductInStoreService }