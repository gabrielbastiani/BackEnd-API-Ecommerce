import { StatusEmphasis, StatusProduct } from "@prisma/client";
import prismaClient from "../../prisma";

class ListAllProductEmphasisService {
    async execute() {
        const emphasisProduct = await prismaClient.product.findMany({
            where: {
                emphasis: StatusEmphasis.Sim,
                status: StatusProduct.Disponivel
            },
            include: {
                avalietions: true,
                buyTogether: true,
                buytogethers: true,
                descriptionproducts: true,
                photoproducts: true,
                productcategories: true,
                relationattributeproducts: {
                    include: {
                        valueAttribute: true
                    }
                },
                store: true,
                tags: true,
                productsvariations: true,
                stockproductcustomer: true
            },
            orderBy: {
                created_at: 'desc'
            }
        })

        return emphasisProduct;
    }
}

export { ListAllProductEmphasisService }