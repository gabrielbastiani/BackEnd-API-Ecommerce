import { StatusRelationAttributeProduct } from "@prisma/client";
import prismaClient from "../../../prisma";

interface AttributeProductRequest {
    product_id: any;
}

class ProductsAndAttributeService {
    async execute({ product_id }: AttributeProductRequest) {
        const allAttributes = await prismaClient.relationAttributeProduct.findMany({
            where: {
                status: StatusRelationAttributeProduct.Disponivel,
                product_id: { in: product_id }
            },
            include: {
                typeAttribute: {
                    include: {
                        valueattribute: {
                            include: {
                                imageAttribute: true,
                                RelationAttributeProduct: {
                                    distinct: "valueAttribute_id",
                                    include: {
                                        valueAttribute: {
                                            include: {
                                                imageAttribute: true
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                valueAttribute: {
                    include: {
                        imageAttribute: true
                    }
                }
            }
        });

        return allAttributes;

    }
}

export { ProductsAndAttributeService }