import { StatusCategory, StatusProductCategory } from '@prisma/client';
import prismaClient from '../../prisma';

interface SearchRequest {
    q: any;
}

class SearchService {
    async execute({ q }: SearchRequest) {
        const dados = await prismaClient.product.findMany({
            where: {
                OR: [
                    {
                        productcategories: {
                            some: {
                                category: {
                                    slug: { in: q }
                                }
                            }
                        }
                    },
                    {
                        relationattributeproducts: {
                            some: {
                                value: { in: q }
                            }
                        }
                    }
                ]
            }
        });

        return dados;

    }
}

export { SearchService }