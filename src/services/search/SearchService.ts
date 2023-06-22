import { StatusCategory, StatusProduct, StatusProductCategory, StatusRelationAttributeProduct } from '@prisma/client';
import prismaClient from '../../prisma';

interface SearchRequest {
    q: any;
}

class SearchService {
    async execute({ q }: SearchRequest) {
        const dados = await prismaClient.product.findMany({
            where: {
                status: StatusProduct.Disponivel,
                OR: [
                    {
                        productcategories: {
                            every: {
                                status: StatusProductCategory.Disponivel
                            },
                            some: {
                                category: {
                                    status: StatusCategory.Disponivel,
                                    slug: { in: q }
                                }
                            }
                        }
                    },
                    {
                        relationattributeproducts: {
                            every: {
                                status: StatusRelationAttributeProduct.Disponivel
                            },
                            some: {
                                valueAttribute: {
                                    slug: { in: q }
                                }
                            }
                        }
                    }
                ]
            },
            include: {
                photoproducts: true
            }
        });

        return dados;

    }
}

export { SearchService }