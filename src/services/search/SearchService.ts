import { StatusCategory, StatusProduct, StatusProductCategory, StatusRelationAttributeProduct } from '@prisma/client';
import prismaClient from '../../prisma';

class SearchService {
    async execute() {
        const dados = await prismaClient.product.findMany({
            where: {
                status: StatusProduct.Disponivel
            },
            include: {
                productcategories: {where: {status: StatusProductCategory.Disponivel}, include: {category: true}},
                relationattributeproducts: {where: {status: StatusRelationAttributeProduct.Disponivel}}
            }
        });
        return dados;
    }
}

export { SearchService }