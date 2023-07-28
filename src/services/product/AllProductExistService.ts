import prismaClient from '../../prisma';

class AllProductExistService {
    async execute() {
        const allProduct = await prismaClient.product.findMany({
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

export { AllProductExistService }