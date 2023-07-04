import prismaClient from '../../prisma';

interface RequestProduct {
    slug: string;
}

class ListExactProductNameService {
    async execute({ slug }: RequestProduct) {
        const exactProduct = await prismaClient.product.findFirst({
            where: {
                slug: slug
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
                variations: true
            }
        })
        return exactProduct;
    }
}

export { ListExactProductNameService }