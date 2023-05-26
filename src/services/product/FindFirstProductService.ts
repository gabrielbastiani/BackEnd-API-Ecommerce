import prismaClient from '../../prisma';

class FindFirstProductService {
    async execute() {
        const findFirstProduct = await prismaClient.product.findFirst({
            orderBy: {
                created_at: 'desc'
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
            }
        })
        return findFirstProduct;
    }
}

export { FindFirstProductService }