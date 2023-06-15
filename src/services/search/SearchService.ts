import { StatusCategory } from '@prisma/client';
import prismaClient from '../../prisma';

interface SearchRequest {
    q: any;
}

class SearchService {
    async execute({ q }: SearchRequest) {
        const dados = await prismaClient.productCategory.findMany({
            where: {
                category: {
                    status: StatusCategory.Disponivel,
                    slug: { in: q }
                },
            },
            orderBy: {
                order: 'asc'
            },
            include: {
                product: { include: { photoproducts: true, productcategories: true } },
                category: true
            }
        });

        return dados;

    }
}

export { SearchService }