import { StatusCategory, StatusProductCategory } from '@prisma/client';
import prismaClient from '../../prisma';

interface SearchRequest {
    q: any;
    a: any;
}

class SearchService {
    async execute({ q, a }: SearchRequest) {
        const dados = await prismaClient.product.findMany({
            where: {
                productcategories: {
                    some: {
                        category: {
                            slug: { in: q }
                        }
                    }
                },
                AND:
                {
                    relationattributeproducts: {
                        some: {
                            value: { in: a }
                        }
                    }
                }

            }
        });

        return dados;

    }
}

export { SearchService }