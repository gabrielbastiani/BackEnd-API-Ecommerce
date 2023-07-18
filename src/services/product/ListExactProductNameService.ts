import { StatusDescriptionProduct } from '@prisma/client';
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
                descriptionproducts: {
                    where: {
                        status: StatusDescriptionProduct.Disponivel
                    },
                    orderBy: {
                        order: 'asc'
                    }
                },
                photoproducts: true,
                productcategories: true,
                relationattributeproducts: {
                    include: {
                        valueAttribute: true,
                        product: true
                    }
                },
                store: true,
                tags: true,
                variations: {
                    include: {
                        productsvariations: {
                            include: {
                                product: {
                                    include: {
                                        relationattributeproducts: {
                                            include: {
                                                valueAttribute: true
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        })
        return exactProduct;
    }
}

export { ListExactProductNameService }