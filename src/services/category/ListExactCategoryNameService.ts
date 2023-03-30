import prismaClient from '../../prisma';

interface RequestCategory {
    slug: string;
}

class ListExactCategoryNameService {
    async execute({ slug }: RequestCategory) {
        const exactCategory = await prismaClient.category.findUnique({
            where: {
                slug: slug
            },
            include: {
                products: true
            }
        })
        return exactCategory;
    }
}

export { ListExactCategoryNameService }