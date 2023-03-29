import prismaClient from '../../prisma';

interface RequestCategory {
    slug: string;
}

class ListExactCategoryNameService {
    async execute({ slug }: RequestCategory) {
        const exactCategory = await prismaClient.category.findUnique({
            where: {
                slug: slug
            }
        })
        return exactCategory;
    }
}

export { ListExactCategoryNameService }