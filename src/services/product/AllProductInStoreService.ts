import { StatusProduct } from '@prisma/client';
import prismaClient from '../../prisma';

class AllProductInStoreService {
    async execute() {
        const allProduct = await prismaClient.product.findMany({
            where: {
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
                productsvariations: true,
                stockproductcustomer: true
            }
        });
        return allProduct;
    }
}

export { AllProductInStoreService }