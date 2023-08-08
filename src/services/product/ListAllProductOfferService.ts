import { StatusOffer, StatusProduct } from "@prisma/client";
import prismaClient from "../../prisma";

class ListAllProductOfferService {
    async execute() {
        const offerProducts = await prismaClient.product.findMany({
            where: {
                offer: StatusOffer.Sim,
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

        return offerProducts;
    }
}

export { ListAllProductOfferService }