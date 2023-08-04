import { StatusCategory, StatusProduct, StatusProductCategory, StatusRelationAttributeProduct } from '@prisma/client';
import prismaClient from '../../prisma';

class FilterService {
    async execute(page = 1, limit = 20, q: any) {

        const skip = limit * (page - 1);

        const allDadosProducts = await prismaClient.product.findMany({
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
            orderBy: {
                created_at: 'asc'
            },
            include: {
                photoproducts: true,
                relationattributeproducts: {
                    include: {
                        valueAttribute: true
                    }
                }
            }
        });

        const dadosProducts = await prismaClient.product.findMany({
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
            orderBy: {
                created_at: 'asc'
            },
            skip,
            take: limit,
            include: {
                photoproducts: true,
                relationattributeproducts: {
                    include: {
                        valueAttribute: true
                    }
                }
            }
        });

        const data = {
            dadosProducts,
            total: allDadosProducts.length,
            total_pages: Math.ceil(allDadosProducts.length / limit),
            current_page: page,
        }

        return data;
    }
}

export { FilterService }