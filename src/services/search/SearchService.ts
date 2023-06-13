import prismaClient from '../../prisma';

interface SearchRequest {
    slug: any;
    value: any;
}

class SearchService {
    async execute({ slug, value }: SearchRequest) {
        const dados = await prismaClient.product.findMany({
            where: {
                productcategories: {every: {category: {in: sl}}}
            }
        });
        return dados;
    }
}

export { SearchService }