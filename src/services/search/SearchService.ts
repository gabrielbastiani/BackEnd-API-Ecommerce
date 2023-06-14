import { StatusCategory, StatusProduct, StatusProductCategory, StatusRelationAttributeProduct } from '@prisma/client';
import prismaClient from '../../prisma';

interface SearchRequest {
    slug: any;
    value: any;
}

class SearchService {
    async execute({ slug, value }: SearchRequest) {
        const dados = await prismaClient.product.findMany({
            where: {
                productcategories: {
                    every: {
                        category: {
                            slug: slug,
                            status: StatusCategory.Disponivel
                        },
                        status: StatusProductCategory.Disponivel
                    }
                },
                OR: {
                    relationattributeproducts: {
                        every: {
                            value: value,
                            status: StatusRelationAttributeProduct.Disponivel
                        }
                    },
                },
                status: StatusProduct.Disponivel
            }
        });
        return dados;
    }
}

export { SearchService }