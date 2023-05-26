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
                relationattributeproducts: true,
                store: true,
                tags: true,
                variations: true
            },
            orderBy: {
                created_at: 'desc'
            }
        })

        return offerProducts;
    }
}

export { ListAllProductOfferService }