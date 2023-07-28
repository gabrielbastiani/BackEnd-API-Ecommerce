import prismaClient from '../../prisma';

class PageListAllProductService {
    async execute(page = 1, limit = 999999) {

        const skip = limit * (page - 1);

        const allProducts = await prismaClient.product.findMany({
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
                productsvariations: true,
                stockproductcustomer: true
            }
        });
        
        const products = await prismaClient.product.findMany({
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
            },
            skip,
            take: limit,
            orderBy: {
                created_at: 'desc'
            }
        });

        const data = {
            products,
            total: allProducts.length,
            total_pages: Math.ceil(allProducts.length / limit),
            current_page: page,
        }

        return data;

    }
}

export { PageListAllProductService }